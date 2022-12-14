import Tag from '../tag'
import Image from 'next/image'
import Publication from './publication'
import { limitStrLength } from '../../utils/string-utils'

const SmallCard = ({
    borderBottom,
    content
}) => {
  return (
    <div className={`flex flex-row items-center self-center mt-6 ${(borderBottom) ? 'bottom-border' : ''}`}>
      <div className="h-[120px] max-w-[165px] basis-[75px] grow shrink image-wrapper">
        <Image
          src={content.banner.url}
          alt={content.title + ' image'}
          className="object-cover"
          layout="fill"
          priority={true}
        />
      </div>
      <div className="flex flex-col justify-center ml-4 basis-60 grow">
        <Tag className="h-4" contentType={content.contentType} tag={content.tag} />
        <h2 className="base-extrabold-text my-[0.2em]">{content.title}</h2>
        <p className="mb-[6px] text-medium-sm-darkgray w-fit">{limitStrLength(content.description)}</p>
        <div className=""><Publication author={content.author} published={content.published}/></div>
      </div>
    </div>
  )
}

export default SmallCard