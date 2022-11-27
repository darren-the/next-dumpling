import Tag from '../tag'
import Image from 'next/image'
import Metadata from './metadata'

const MediumCard = ({
    borderBottom,
    content
}) => {
  return (
    <div className={`w-full block mb-4 ${(borderBottom) ? 'bottom-border' : ''}`}>
      <Tag contentType={content.contentType} tag={content.tag} />
      <div className="h-[195px] w-full my-4 min-w-[200px] image-wrapper">
        <Image src={content.banner.url} alt={content.title + ' image'} className="object-cover" layout="fill"/>
      </div>
      <h2 className="base-extrabold-text">{content.title}</h2>
      <p className="pt-[0.3rem] mb-4 text-medium-sm-darkgray">{content.description}</p>
      <div className="mb-4"><Metadata author={content.author} published={content.published}/></div>
    </div>
  )
}

export default MediumCard