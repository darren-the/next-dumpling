import { getTweets } from "../modules/contentful/twitter"
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { NextSeo } from 'next-seo'

const Memes = ({ tweetsJSON }) => {
  const tweets = JSON.parse(tweetsJSON)

  var tweetsLeft = []
  var tweetsRight = []

  const tweetEmbeds = tweets.map((item, index) => {
    const tweetEmbed = (
      <div key={index} className="h-[fit-content] max-w-[500px] w-full flex flex-col mb-10">
        <h1 className="heading-extrabold mb-6">{item.title}</h1>
        <div className="select-none">
          <TwitterTweetEmbed tweetId={item.tweetId} />
        </div>
        
      </div>
    )

    if (index % 2 === 0) tweetsLeft.push(tweetEmbed)
    else tweetsRight.push(tweetEmbed)

    return tweetEmbed
  }
  
  
)
  return (
    <div className="flex flex-col p-8">
      <NextSeo
        title="Memes - The Dumpling"
        description="placeholder memes description"
      />
      {/* desktop view */}
      <div className="hidden min-[1000px]:grid grid-cols-grid-view w-full justify-evenly">
        <div className="pr-4 flex flex-col">
          {tweetsLeft}
        </div>
        <div className="pl-4 flex flex-col">
          {tweetsRight}
        </div>
      </div>

      {/* mobile view */}
      <div className="flex flex-col w-full items-center min-[1000px]:hidden">
        {tweetEmbeds}
      </div>
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