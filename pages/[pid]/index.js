import Link from 'next/link'
import { useRouter } from 'next/router'
import LargeCard from '../../components/cards/large-card'
import Header from '../../components/header'
import { getContent } from '../../modules/contentful/content'

const Preview = ({ contentJSON }) => {
  const route = useRouter().asPath.slice(1)
  const content = JSON.parse(contentJSON)
  const contentCards = (content && content.length > 0) ? content.map((item, index) =>
    <div key={index} className={`${(index % 2 ===0) ? 'pr-4' : 'pl-4'} pt-4`}>
      <Link href={`/${route}/${item['content-id']}`}>
        <a><LargeCard content={item} borderBottom={true} /></a>
      </Link>
    </div>
  ) : null
  
  

  return (
    <div className="p-8 w-full grid grid-cols-preview justify-evenly">
      <Header contentType={route} />
      <div className="w-full h-full"></div>
      {contentCards}
    </div>
  )
}

export default Preview

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { pid: 'news' } },
      { params: { pid: 'interviews' } },
      { params: { pid: 'memes' } },
      { params: { pid: 'jobs' } },
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
    props: { contentJSON }
  }
}