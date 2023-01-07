import { getTweets } from "../modules/contentful/twitter"
import { NextSeo } from 'next-seo'
import { metadata } from "../my.config"
import { useState, useCallback } from "react"
import InfiniteScroll from 'react-infinite-scroller'
import CustomTweetEmbed from "../components/custom-tweet-embed"
import Masonry from "react-masonry-css"
import { ClipLoader } from "react-spinners"

const Memes = ({ tweetsJSON }) => {
  const tweets = JSON.parse(tweetsJSON)

  const [tweetEmbeds, setTweetEmbed] = useState(
    tweets.slice(0, process.env.memesTweetLimit).map((item) =>
      <CustomTweetEmbed item={item} key={item.tweetId} />
    )
  )
  const [lastIndex, setLastIndex] = useState(process.env.memesTweetLimit)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const loadMoreTweets = useCallback(() => {
    // Get the index range of tweets to load
    if (isLoading) return
    setIsLoading(true)

    const start = lastIndex
    const end = (lastIndex + process.env.memesTweetLimit >= tweets.length)
      ? tweets.length
      : lastIndex + process.env.memesTweetLimit

    if (end === tweets.length) setHasMore(false)
    setLastIndex(end)

    setTweetEmbed([
      ...tweetEmbeds,
      tweets.slice(start, end).map((item, index) =>
        <CustomTweetEmbed item={item} key={item.tweetId} />
      )
    ])
    setIsLoading(false)
  }, [tweetEmbeds, lastIndex, hasMore, isLoading])

  return (
    <div className="main">
      <NextSeo {...metadata.memes} />

        <InfiniteScroll
          pageStart={0}
          loadMore={loadMoreTweets}
          hasMore={hasMore}
          initialLoad={false}
          loader={
            <div className="w-full max-w-[1032px] flex justify-center">
              <ClipLoader
                height={70}
                color="#6a6a6a"
              />
            </div>
          }
          threshold={0}
          className="w-full"
        >

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