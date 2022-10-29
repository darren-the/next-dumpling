import axios from 'axios'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { contentfulOptions } from './contentful-options'

export const getContent = async () => {
    const response = await axios.get(process.env.baseURL + '/contentful/content')

    // TODO: May not need to be stored as an object anymore
    // In the old build, content were stored in an object so that it could be easily referenced.
    // In the new build, it is unlikely that content will need to be referenced at all.
    const content = response.data.reduce((prevItems, fields) => ({
        ...prevItems, 
        [fields['content-id']]: {
            contentType: fields.contentType,
            tag: fields.tag,
            title: fields.title,
            description: fields.description,
            author: fields.author,
            published: fields.published,
            banner: (fields.banner) ? fields.banner.fields.file.url : null,
            body: documentToReactComponents(fields.body, contentfulOptions),
            'content-id': fields['content-id'],
        }
    }), {})
    return content
}

export const splitContentByType = (content) => {
    // sort content by date in descending order
    const contentArr = Object.keys(content).map((key) => content[key])
    const contentSorted = contentArr.sort((a, b) => Date.parse(b.published) - Date.parse(a.published))
  
    // split content by content Type
    var splitContent = {}
    contentSorted.forEach((item) => {
        const targetContent = splitContent[item.contentType]
        splitContent[item.contentType] = (targetContent) ? [ ...targetContent, item] : [item]
    })
    return splitContent
  }
