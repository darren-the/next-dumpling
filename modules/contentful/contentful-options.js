import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import styles from './contentful.module.css'
import Image from 'next/image'

const paragraphComponent = (children) => {
    // embed tweet if link is provided
    if (children && children.length > 0 && typeof children[0] === "string") {
        const tweetMatches = children[0].match(/https:\/\/twitter\.com/g)
        if (tweetMatches) {
            const tweetId = children[0].replace(/https:\/\/twitter\.com\/(.*)status\//g, "")
            if (!tweetId.match(/[0-9]/g)) {
                console.log("tweet id is invalid")
                return
            }
            return (
                <div className="centering">
                    <div className="h-[fit-content] max-w-lg w-full flex flex-col mb-10 self-center">
                        <TwitterTweetEmbed tweetId={tweetId} />
                    </div>
                </div>

            )
        } 
    }
    
    return <p className={styles.contentfulText}>{children}</p>
}

export const contentfulOptions = {
  renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-jakarta-bold inline">{text}</b>,
      [MARKS.UNDERLINE]: (text) => <u className="decoration-solid decoration-1 inline">{text}</u>
  },
  renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => paragraphComponent(children),
      [BLOCKS.HEADING_1]: (node, children) => <h1 className={`${styles.contentfulHeading} leading-[2.7rem]`}>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className={`${styles.contentfulHeading} leading-[2.2rem]`}>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className={`${styles.contentfulHeading} leading-[1.87rem]`}>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4 className={`${styles.contentfulHeading} leading-[1.7rem]`}>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5 className={`${styles.contentfulHeading} leading-[1.5rem]`}>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6 className={`${styles.contentfulHeading} leading-[1.35rem]`}>{children}</h6>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="ml-5 list-disc">{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="mt-0 ml-[2.5rem] inline leading-[1.8rem]">{children}</li>,
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const fields = node.data.target.fields
        return (
            <div className="flex w-fit self-center">
                <Image 
                  src={`https:${fields.file.url}`}
                  alt={fields.description}
                  height={fields.file.details.image.height}
                  width={fields.file.details.image.width}
                />
            </div>   
        );
    },
    [INLINES.HYPERLINK]: ({ data }, children) => 
    <a href={data.uri} className="font-jakarta-bold inline decoration-solid decoration-1 decoration-custom-blue text-custom-blue">
        {children}
    </a>
  }
}