import axios from "axios"

export const getTweets = async () => {
  const response = await axios.get(process.env.baseURL + '/contentful/tweet')
  const sortedTweets = response.data.sort((a, b) => Date.parse(b.dateCreated) - Date.parse(a.dateCreated))

  return sortedTweets
}