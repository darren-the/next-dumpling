import axios from 'axios'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { contentfulOptions } from './contentful-options'

export const getContent = async (contentType, id) => {
  const url = process.env.baseURL + `/contentful/${contentType}`
  const response = (id) ? await axios.get(`${url}?=${id}`) : await axios.get(url)

  const content = response.data.map((item) => {
    return {
      ...item,
      banner: (item.banner) ? item.banner.fields.file.url : null,
      body: documentToReactComponents(item.body, contentfulOptions),
    }
  })

  const contentSorted = content.sort((a, b) => Date.parse(b.published) - Date.parse(a.published))

  return contentSorted
}

export const getContentIds = async (contentType) => {
  const response = await axios.get(process.env.baseURL + `/contentful/${contentType}/?onlyIds=1`)
  return response.data.ids
} 

// export const splitContentByType = (content) => {
//     // sort content by date in descending order
//     const contentArr = Object.keys(content).map((key) => content[key])
//     const contentSorted = contentArr.sort((a, b) => Date.parse(b.published) - Date.parse(a.published))
  
//     // split content by content Type
//     var splitContent = {}
//     contentSorted.forEach((item) => {
//         const targetContent = splitContent[item.contentType]
//         splitContent[item.contentType] = (targetContent) ? [ ...targetContent, item] : [item]
//     })
//     return splitContent
//   }
