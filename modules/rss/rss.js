import axios from 'axios'

export const getRSS = async () => {
  
  const newsSources = ["cointelegraph", "coindesk"]
        
  const feeds = await Promise.all(newsSources.map((source) => 
    axios.get(`${process.env.baseURL}/${source}`).then((response) =>
      response.data.rss.channel.item.map((item) => {
        // any source-sepcific preprocessing will occur here:
        if (source === "cointelegraph") {
          // author parse
          item["dc:creator"] = item["dc:creator"].split(/\s+/).slice(2).join(" ")

          // description parse
          const result = item.description.match(/(<p>)(.*)(<\/p>)/g)
          item.description = (result.length > 0) ? result[0].slice(3, -4) : ""
        }

        return {
          source: response.data.rss.channel.link,
          title: item.title,
          description: item.description,
          author: item["dc:creator"],
          published: item.pubDate,
          link: item.link,
        }
      })            
    )
  ))

  const aggFeeds = [].concat(...feeds)
  const sortedFeeds = aggFeeds.sort((a, b) => Date.parse(b.published) - Date.parse(a.published))
  return sortedFeeds
  
}