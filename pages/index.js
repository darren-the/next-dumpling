import { NextSeo } from 'next-seo'
import { getContent, splitContentByType } from '../modules/contentful/content'
import Link from 'next/link'
import Header from '../components/header'
import LargeCard from '../components/cards/large-card'
import MediumCard from '../components/cards/medium-card'
import SmallCard from '../components/cards/small-card'
import { getRSS } from '../modules/rss/rss'
import NoImageCard from '../components/cards/no-image-card'

const Index = ({ newsJSON, interviewsJSON, RSS }) => {
  const news = JSON.parse(newsJSON)
  const interviews = JSON.parse(interviewsJSON)

  // Create large news card
  const largeNewsCard = (news && news.length > 0) ? (
    <Link href={`/news/${news[0]['contentfulId']}`}>
      <a><LargeCard content={news[0]} borderBottom={true} /></a>
    </Link>
  ) : null

  // Create small news cards
  const smallNewsCards = (news && news.length > 1) ? news.slice(1).map((item, index) =>
    <Link href={`/news/${item['contentfulId']}`} key={index}>
      <a><SmallCard content={item} /></a>
    </Link>
  ) : null

  // Create interview cards
  const interviewCards = (interviews && interviews.length > 0) ? interviews.slice(0, process.env.homeInterviewLimit).map((item, index) =>
    <Link href={`/interviews/${item['contentfulId']}`} key={index}>
      <a><MediumCard content={item} borderBottom={true} /></a>
    </Link>
  ) : null
  
  // Create RSS cards
  const RSSCards = (RSS && RSS.length > 0) ? RSS.slice(0, process.env.homeRSSLimit).map((item, index) =>
    <a href={item.link} key={index}>
      <NoImageCard content={item} />
    </a>
  ) : null

  return (
    <div>
      <NextSeo
        title="The Dumpling: Bao-sized News on Web 3.0, Asian Culture, Crypto, and NFTs"
        description="Read the latest news on asian culture, cryptocurrency, NFTs, and upcoming projects on the blockchain."
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico"
          }
        ]}
      />
      
      <div className="flex justify-center py-8 px-[3%] min-[370px]:px-[5%] min-[390px]:p-8">
        <div className="w-full grid grid-areas-home-mobile xl:grid-cols-home-desktop justify-items-center xl:grid-areas-home-desktop xl:justify-evenly">
          {/* TODO: set width to full for mobile view, once we are set on a desktop width */}
          <div className="grid-in-news flex flex-col w-full xl:w-[95%] xl:mr-4 mb-8 max-w-[900px]"> {/* max-w-[900px] */}
            <Link href="/news">
              <a><Header contentType="news" /></a>
            </Link>
            {largeNewsCard}
            {smallNewsCards}
          </div>

          <div className="grid-in-interviews flex flex-col w-full xl:w-[95%] xl:ml-4 mb-8 max-w-[485px]"> {/* max-w-[485px] */}
            <Link href="/news">
              <a><Header contentType="interviews" /></a>
            </Link>
            {interviewCards}
          </div>

          <div className="grid-in-rss flex flex-col w-full xl:w-[95%] xl:ml-4 max-w-[485px]"> {/* max-w-[485px] */}
            <Header contentType="rss" />
            {RSSCards}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {

  // fetch content
  const news = await getContent('news')
  const newsJSON = JSON.stringify(news)
  const interviews = await getContent('interviews')
  const interviewsJSON = JSON.stringify(interviews)

  //fetch rss
  const RSS = await getRSS()

  return {
    props: { newsJSON, interviewsJSON, RSS },
    revalidate: 60,
  }
}

export default Index