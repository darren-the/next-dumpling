import { limitStrLength } from '../../utils/string-utils'
import Tag from '../tag'
import Publication from './publication'

const NoImageCard = ({
    borderBottom,
    content
}) => {
  return (
    <div className={`flex flex-row items-center self-center mb-6 ${(borderBottom) ? 'bottom-border' : ''}`}>
      <div className="flex flex-col justify-center basis-60 grow">
        <Tag className="min-h-4 hidden" contentType={content.contentType} tag={content.tag} />
        <h2 className="base-extrabold-text my-[0.2em]">{content.title}</h2>
        <p className="mb-[6px] text-medium-sm-darkgray">{limitStrLength(content.description)}</p>
        <div className=""><Publication author={content.author} published={content.published}/></div>
      </div>
    </div>
  )
}

export default NoImageCard