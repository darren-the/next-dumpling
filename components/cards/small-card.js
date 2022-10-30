import Tag from '../tag'
import Image from 'next/image'
import Metadata from './metadata'
import styles from './cards.module.css'

const SmallCard = ({
    borderBottom,
    content
}) => {
  return (
    <div className={`flex flex-row items-center self-center mt-6 ${(borderBottom) ? 'bottom-border' : ''}`}>
      <div className={`h-[120px] max-w-[165px] basis-[75px] grow shrink ${styles.imageWrapper}`}>
        <Image src={`https:${content.banner}`} className="object-cover" layout="fill"/>
      </div>
      <div className="flex flex-col justify-center ml-4 basis-60 grow">
        <Tag className="h-4" contentType={content.contentType} tag={content.tag} />
        <h2 className="base-extrabold-text my-[0.2em]">{content.title}</h2>
        <p className="mb-[6px]">{content.description}</p>
        <div className=""><Metadata author={content.author} published={content.published}/></div>
      </div>
    </div>
  )
}

export default SmallCard