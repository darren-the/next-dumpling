import { getContent, getContentIds } from "../../modules/contentful/content"

const Content = ({ contentJSON }) => {
  const content = JSON.parse(contentJSON)
  return (
    <></>
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

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const content = await getContent(params.pid)
  const contentJSON = JSON.stringify((content && content.length > 0)
      ? content[0]
      : {}  
  )

  return {
    props: { contentJSON }
  }
}