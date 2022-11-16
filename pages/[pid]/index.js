import Link from 'next/link'
import { useRouter } from 'next/router'
import LargeCard from '../../components/cards/large-card'
import Header from '../../components/header'
import { getContent } from '../../modules/contentful/content'
import { NextSeo } from 'next-seo'

const Preview = ({ contentJSON }) => {
  const route = useRouter().asPath.slice(1)
  const content = JSON.parse(contentJSON)
  const contentCards = (content && content.length > 0) ? content.map((item, index) =>
    <div key={index} className={`${(index % 2 ===0) ? 'xl:pr-4' : 'xl:pl-4'} pt-4`}>
      <Link href={`/${route}/${item.contentfulId}`}>
        <a><LargeCard content={item} borderBottom={true} /></a>
      </Link>
    </div>
  ) : null
  
  

  return (
    <div className="flex flex-col items-center">
      <NextSeo
        title={route.charAt(0).toUpperCase() + route.slice(1) + " - The Dumpling"}
      />
      <div className="p-8 max-w-[500px] xl:max-w-none xl:w-full xl:grid xl:grid-cols-grid-view xl:justify-evenly">
        <Header contentType={route} />
        <div className="w-full h-full"></div>
        {contentCards}
      </div>
    </div>
  )
}

export default Preview

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { pid: 'news' } },
      { params: { pid: 'interviews' } },
    ],
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  var contentJSON = JSON.stringify([])
  if (params.pid === 'news' || params.pid === 'interviews') {
    const content = await getContent(params.pid)
    contentJSON = JSON.stringify(content)
  }

  return {
    props: { contentJSON },
    revalidate: 60,
  }
}