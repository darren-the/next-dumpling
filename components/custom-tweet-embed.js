import { TwitterTweetEmbed } from 'react-twitter-embed'
import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const CustomTweetEmbed = ({ item }) => {
  const [height, setHeight] = useState('1000px')
  const [display, setDisplay] = useState('hidden')

  // TODO: Error boundaries don't work with tweet embeds. Find an alternative way to deal with missing tweets
  const ErrorFallback = () => {
    setHeight('0px')
    return <></>
  }
  return (
    <div className={`h-[${height}] max-w-[500px] w-full flex flex-col mb-10`}>
      <h1 className={`${display} heading-extrabold mb-6`}>{item.title}</h1>
      <div className="select-none">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TwitterTweetEmbed
            tweetId={item.tweetId}
            onLoad={() => {
              setHeight('fit-content')
              setDisplay('inline-block')
            }}
          />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default CustomTweetEmbed