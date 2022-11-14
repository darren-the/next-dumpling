import { getTweets } from "../modules/contentful/twitter"
import { TwitterTweetEmbed } from 'react-twitter-embed'

const Memes = ({ tweetsJSON }) => {
  const tweets = JSON.parse(tweetsJSON)
  console.log(tweets)

  var tweetsLeft = []
  var tweetsRight = []

  tweets.forEach((item, index) => {
    const tweetEmbed = (
      <div key={index} className="h-[fit-content] max-w-[500px] w-full flex flex-col mb-10">
        <h1 className="heading-extrabold mb-6">{item.title}</h1>
        <TwitterTweetEmbed tweetId={item.tweetId} />
      </div>
    )

    if (index % 2 === 0) tweetsLeft.push(tweetEmbed)
    else tweetsRight.push(tweetEmbed)
  }
  
)
  return (
    <div className="flex flex-col p-8">
      <div className="grid grid-cols-grid-view w-full justify-evenly">
        <div className="pr-4 flex flex-col">
          {tweetsLeft}
        </div>
        <div className="pl-4 flex flex-col">
          {tweetsRight}
        </div>
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