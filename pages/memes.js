import { getTweets } from "../modules/contentful/twitter"
import { NextSeo } from 'next-seo'
import { metadata } from "../my.config"
import { useState, useCallback } from "react"
import InfiniteScroll from 'react-infinite-scroller'
import CustomTweetEmbed from "../components/custom-tweet-embed"
import Masonry from "react-masonry-css"

const Memes = ({ tweetsJSON }) => {
  const tweets = JSON.parse(tweetsJSON)

  const [tweetEmbeds, setTweetEmbed] = useState([])
  const [lastIndex, setLastIndex] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const loadMoreTweets = useCallback(() => {
    // Get the index range of tweets to load
    const start = lastIndex
    const end = (lastIndex + process.env.memesTweetLimit >= tweets.length)
      ? tweets.length
      : lastIndex + process.env.memesTweetLimit

    if (end === tweets.length) setHasMore(false)
    setLastIndex(end)

    setTweetEmbed([
      ...tweetEmbeds,
      tweets.slice(start, end).map((item, index) =>
        <CustomTweetEmbed item={item} key={index} />
      )
    ])
    
  }, [tweetEmbeds, lastIndex, hasMore])

  return (
    <div className="main">
      <NextSeo {...metadata.memes} />
      {/* TODO: Make a function for a pinterest-like board. Also allow for 3 columns*/}

      {/* desktop view */}
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMoreTweets}
          hasMore={hasMore}
          loader={<div>LOADING</div>}
          threshold={0}
          className="w-full"
        >
          {/* <div className="w-full max-w-[1032px] flex flex-wrap gap-x-8">
              {tweetEmbeds}
          </div> */}
          <Masonry
            breakpointCols={{
              default: 2,
              1000: 1,
            }}
            className="w-full max-w-[1032px] gap-x-8 flex"
          >
            {tweetEmbeds}
          </Masonry>
        </InfiniteScroll>
        
      

      {/* mobile view */}
      {/* <div className="flex flex-col w-full items-center min-[1000px]:hidden">
        {tweetEmbeds}
      </div> */}
    </div>
  )
}

export default Memes

export const getStaticProps = async () => {
  const tweets = await getTweets()
  const tweetsJSON = JSON.stringify(tweets)

  return {
    props: { tweetsJSON },
    revalidate: 60,
  }
}