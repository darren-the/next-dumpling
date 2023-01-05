import Link from 'next/link'
import { useRouter } from 'next/router'
import LargeCard from '../../components/cards/large-card'
import Header from '../../components/header'
import { getContent } from '../../modules/contentful/content'
import { NextSeo } from 'next-seo'
import { metadata } from '../../my.config'

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
    <div className="main">
      <NextSeo {...metadata[route]} />
      <div className="w-full grid xl:grid-cols-grid-view">
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
    const content = await getContent({
      contentType: params.pid,
      noBody: 1,
    })
    contentJSON = JSON.stringify(content)
  }

  return {
    props: { contentJSON },
    revalidate: 60,
  }
}