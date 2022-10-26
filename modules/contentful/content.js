import axios from 'axios'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const getContent = async () => {
    // Fetching Contentful articles
    const response = await axios.get(process.env.baseURL + '/contentful/content')
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
