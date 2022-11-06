import Head from 'next/head'
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
      <a><MediumCard content={news[0]} borderBottom={true} /></a>
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
      <Head>
        <title>My app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex justify-center p-8">
        <div className="w-full grid grid-areas-home justify-evenly">

          <div className="grid-in-news flex flex-col max-w-[700px] mr-4">
            <Header contentType="news" />
            {largeNewsCard}
            {smallNewsCards}
          </div>

          <div className="grid-in-interviews home-desktop-right">
            <Header contentType="interviews" />
            {interviewCards}
          </div>

          <div className='grid-in-rss home-desktop-right'>
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
  }
}

export default Index