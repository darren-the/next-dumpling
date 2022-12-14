import Publication from "../../components/cards/publication"
import Tag from "../../components/tag"
import { getContent, getContentIds } from "../../modules/contentful/content"
import Image from "next/image"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { contentfulOptions } from '../../modules/contentful/contentful-options'
import Button from "../../components/button"
import Header from '../../components/header'
import { getRSS } from "../../modules/rss/rss"
import NoImageCard from "../../components/cards/no-image-card"
import { NextSeo } from 'next-seo'

const Content = ({ contentJSON, RSS }) => {
  var content = JSON.parse(contentJSON)
  content.body = documentToReactComponents(content.body, contentfulOptions)

  // Create RSS cards
  const RSSCards = (RSS && RSS.length > 0) ? RSS.slice(0, 4).map((item, index) =>
    <a href={item.link} key={index} className="max-w-[385px]">
      <NoImageCard content={item} />
    </a>
  ) : null

  return (
    <div className="grid grid-areas-content-mobile grid-cols-1 min-[1300px]:grid-areas-content-desktop min-[1300px]:grid-cols-content">
      <NextSeo
        title={'The Dumpling - ' + content.title}
        description={content.description}
        openGraph={{
          title: 'The Dumpling - ' + content.title,
          description: content.description,
          images: [
            {
              url: content.banner.url,
              width: content.banner.width,
              height: content.banner.height,
              alt: 'Content banner',
            }
          ]
        }}
      />
      <div className="grid-in-content-outer main flex-col max-w-[1100px]">
        <div className="flex flex-col mb-8">

          <Tag contentType={content.contentType} tag={content.tag} />

          <div className="flex flex-col w-full mb-8 self-center">
            <h1 className="heading-extrabold mt-[10px]">{content.title}</h1>
            <p className="base-medium-text mb-[10px]">{content.description}</p>
            <Publication author={content.author} published={content.published} />
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex self-center image-wrapper">
              <Image 
                src={content.banner.url}
                alt="content banner"
                height={content.banner.height}
                width={content.banner.width}
                priority={true}
              />
            </div>

            <div className="flex flex-col w-full min-[1500px]:w-[65%]">{content.body}</div>
          </div>
          
        </div>

        <div className="bg-custom-blue p-8 rounded-md flex justify-center">
          <div className="max-w-[550px] flex flex-col items-center">
            <h1 className="heading-extrabold text-white text-center">
              Stay on top of the space, get the hottest degen news in your inbox.
            </h1>
            <div className="mt-4 h-[52px] max-w-[265px] w-full">
              <Button href="https://dumpling.beehiiv.com/"/>
            </div>
          </div>
        </div>

      </div>

      <div className="grid-in-content-rec bg-white w-full flex justify-center">
        <div className="p-5">
          <Header contentType="rss" />
          <div className="flex flex-col md:grid md:grid-cols-2-auto md:grid-rows-2-auto md:gap-x-8">
            {RSSCards}
          </div>
        </div>
      </div>

      <div className="grid-in-content-ad left-border h-20 md:h-[160px] min-[1300px]:h-full min-[1300px]:w-[313px]"></div>

    </div>
  )
}

export default Content

export const getStaticPaths = async () => {
  const getPaths = async (contentType) => {
    const ids = await getContentIds(contentType)
    return ids.map((id) => {
      return {
        params: {
          pid: contentType,
          contentId: id,
        }
      }
    })
  }

  const paths = [].concat(
    await getPaths('news'),
    await getPaths('interviews'))

  return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params }) => {
  const content = await getContent({
    contentType: params.pid,
    id: params.contentId,
  })
  const contentJSON = JSON.stringify((content && content.length > 0)
      ? content[0]
      : {}  
  )

  const RSS = await getRSS()

  return {
    props: { contentJSON, RSS },
    revalidate: 60,
  }
}