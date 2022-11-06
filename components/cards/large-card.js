import Tag from '../tag'
import Image from 'next/image'
import Metadata from './metadata'
import styles from './cards.module.css'

const LargeCard = ({
    borderBottom,
    content
}) => {
  return (
    <div className={`w-full block ${(borderBottom) ? 'bottom-border' : ''}`}>
      <Tag contentType={content.contentType} tag={content.tag} />
      <div className={`my-4  min-w-[335px] aspect-[2/1] w-full ${styles.imageWrapper}`}>
        <Image src={content.banner} className="object-cover" layout="fill"/>
      </div>
      <h2 className="text-2xl font-jakarta-bold text-black">{content.title}</h2>
      <p className="pt-[0.3rem] mb-9 text-medium-sm-darkgray">{content.description}</p>
      <div className="mb-6"><Metadata author={content.author} published={content.published}/></div>
    </div>
  )
}

export default LargeCard