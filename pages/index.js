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
import { Oval } from "react-loader-spinner"
import { useQuery } from 'react-query'
import { useDebounce } from 'use-debounce'
import InfiniteScrollCards from '../components/infinite-scroll-cards'


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
  const createSmallCards = (content) => {
    if (!content) return
    return content.map((item, index) =>
      <Link href={`/${content.contentType}/${item['contentfulId']}`} key={index}>
        <a><SmallCard content={item} /></a>
      </Link>
    )
  }
    
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

  // ======================== Search ========================
  const [isSearching, setIsSearching] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  // Define function that will fetch and concat data to be searched
  const getSearchResults = async (text) =>{
    console.log('fetch')
    const newsResults = await getContent({
      contentType: 'news',
      noBody: 1,
    })

    const interviewResults = await getContent({
      contentType: 'interviews',
      noBody: 1,
    })
    const results = [...newsResults, ...interviewResults].sort((a, b) => Date.parse(b.published) - Date.parse(a.published))
    const filteredContent = results.filter((item) => {
      return item.title.toLowerCase().match(new RegExp(text.toLowerCase())) != null
    })
    return createSmallCards(filteredContent)
  }

  // Define query that will call the above function
  const debouncedSearch = useDebounce(searchTerm, 1000)
  const { data, isLoading } = useQuery(
    ['search', debouncedSearch],
    () => {
      console.log(isLoading)
      return getSearchResults(debouncedSearch[0])
    },
    { 
      placeholderData: <div className="flex justify-center"><Oval
        visible={true}
        height={50}
        width={50}
        color="#6a6a6a"
        strokeWidth={3}
        secondaryColor="#9c9c9c"
        strokeWidthSecondary={3}
      /></div>,
      enabled: Boolean(searchTerm),
    }
  )

  // Trigger this on input change of search bar
  const search = (text) => {
    if (text === '') setIsSearching(false)
    else setIsSearching(true)
    setSearchTerm(text)
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
        {data}
      </div>

      <div className={
        `${(isSearching) ? 'hidden' : ''}
        max-w-[1400px] grid grid-areas-home-mobile xl:grid-cols-home-desktop xl:grid-rows-home-desktop xl:grid-areas-home-desktop xl:justify-start`
      }>

        <div className="grid-in-news flex flex-col w-full xl:w-[95%]  mb-8 max-w-[900px]">
          <Link href="/news">
            <a><Header contentType="news" /></a>
          </Link>
          {largeNewsCard}
          <InfiniteScrollCards
            initialContent={news.slice(1)}
            contentType='news'
            cardWrapper={createSmallCards}
            className="w-full hidden xl:inline-block"
            limit={process.env.homeNewsLimit}
          />
          <div className="xl:hidden">
            {smallNewsCards}
          </div>
        </div>

        <div className="grid-in-interviews flex flex-col w-full mb-8 xl:max-w-[485px]">
          <Link href="/news">
            <a><Header contentType="interviews" /></a>
          </Link>
          {interviewCards}
        </div>

        <div className="grid-in-rss flex flex-col w-full xl:w-[95%] max-w-[485px]">
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
    start: 0,
    end: process.env.homeNewsLimit,
  })
  const newsJSON = JSON.stringify(news)
  const interviews = await getContent({
    contentType: 'interviews',
    noBody: 1,
    start: 0,
    end: process.env.homeInterviewLimit,
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