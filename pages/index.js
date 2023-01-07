import { NextSeo } from 'next-seo'
import { getContent } from '../modules/contentful/content'
import Link from 'next/link'
import Header from '../components/header'
import LargeCard from '../components/cards/large-card'
import MediumCard from '../components/cards/medium-card'
import SmallCard from '../components/cards/small-card'
import { getRSS } from '../modules/rss/rss'
import NoImageCard from '../components/cards/no-image-card'
import Image from 'next/image'
import { useState } from 'react'

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
  // note: this is a function as it is used later for search results
  const createSmallCards = (content) =>
    content.map((item, index) =>
      <Link href={`/${content.contentType}/${item['contentfulId']}`} key={index}>
        <a><SmallCard content={item} /></a>
      </Link>
    )

  const smallNewsCards = (news && news.length > 1) ? createSmallCards(news.slice(1)) : null

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

  // Search
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const search = async (searchTerm) => {
    if (searchTerm === '') setIsSearching(false)
    else setIsSearching(true)

    const searchContent = [...news, ...interviews].sort((a, b) => Date.parse(b.published) - Date.parse(a.published))
    const filteredContent = searchContent.filter((item) => {
      return item.title.match(new RegExp(searchTerm)) != null
    })
    setSearchResults(createSmallCards(filteredContent))
  }

  return (
    <div className="main flex-col">
      {/* {document.getElementById("__NEXT_DATA__").text} */}
      <NextSeo
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico"
          }
        ]}
      />

      {/* Search bar */}
      <form className="appearance-none mb-[26px]">
        <div className="max-w-[365px] h-[40px] border-2 border-black rounded-full flex items-center px-4 select-none">
          <Image
            src="/assets/search-icon.svg"
            alt="search icon"
            width={15}
            height={15}
            priority={true}
          />
          <input
            type="text"
            className="w-full appearance-none ml-3 base-bold-text text-black bg-transparent outline-none placeholder-custom-darkgray"
            placeholder="Search"
            onInput={e => search(e.target.value)}
          />
        </div>
      </form>
      
      {/* Search results */}
      <div className={
        `${(!isSearching) ? 'hidden' : ''} max-w-[900px]`
      }>
        {searchResults}
      </div>

      <div className={
        `${(isSearching) ? 'hidden' : ''}
        max-w-[1400px] grid grid-areas-home-mobile xl:grid-cols-home-desktop xl:grid-areas-home-desktop xl:justify-start`
      }>
        {/* TODO: set width to full for mobile view, once we are set on a desktop width */}
        <div className="grid-in-news flex flex-col w-full xl:w-[95%]  mb-8 max-w-[900px]"> {/* max-w-[900px] */}
          <Link href="/news">
            <a><Header contentType="news" /></a>
          </Link>
          {largeNewsCard}
          {smallNewsCards}
        </div>

        <div className="grid-in-interviews flex flex-col w-full mb-8 xl:max-w-[485px]"> {/* max-w-[485px] */}
          <Link href="/news">
            <a><Header contentType="interviews" /></a>
          </Link>
          {interviewCards}
        </div>

        <div className="grid-in-rss flex flex-col w-full xl:w-[95%] max-w-[485px]"> {/* max-w-[485px] */}
          <Header contentType="rss" />
          {RSSCards}
        </div>
        
      </div>
    </div>
  )
}

export const getStaticProps = async () => {

  // fetch content
  const news = await getContent({
    contentType: 'news',
    noBody: 1,
  })
  const newsJSON = JSON.stringify(news)
  const interviews = await getContent({
    contentType: 'interviews',
    noBody: 1,
  })
  const interviewsJSON = JSON.stringify(interviews)

  //fetch rss
  const RSS = await getRSS()
  return {
    props: { newsJSON, interviewsJSON, RSS },
    revalidate: 60,
  }
}

export default Index