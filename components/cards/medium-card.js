import Tag from '../tag'
import Image from 'next/image'
import Publication from './publication'

const MediumCard = ({
    borderBottom,
    content
}) => {
  return (
    <div className={`w-full block mb-4 ${(borderBottom) ? 'bottom-border' : ''}`}>
      <Tag contentType={content.contentType} tag={content.tag} />
      <div className="my-4 w-full min-w-[200px] image-wrapper aspect-[2/1] xl:aspect-auto xl:h-[195px]">
        <Image src={content.banner.url} alt={content.title + ' image'} className="object-cover" layout="fill"/>
      </div>
      <h2 className="base-extrabold-text">{content.title}</h2>
      <p className="pt-[0.3rem] mb-4 text-medium-sm-darkgray">{content.description}</p>
      <div className="mb-4"><Publication author={content.author} published={content.published}/></div>
    </div>
  )
}

export default MediumCard