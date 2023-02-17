import { useState, useCallback } from "react"
import InfiniteScroll from "react-infinite-scroller"
import { Oval } from "react-loader-spinner"
import { getContent } from "../modules/contentful/content"

const InfiniteScrollCards = ({
    initialContent,
    contentType,
    cardWrapper,
    classWrapper = '',
    className = '',
    limit }) => {
  const [cards, setCards] = useState(
    (initialContent && initialContent.length > 0) ? cardWrapper(initialContent) : null
  )
  
  const [lastIndex, setLastIndex] = useState(limit)
  const [hasMore, setHasMore] = useState(true)
  const [isMoreLoading, setIsMoreLoading] = useState(false)
  
  const loadMoreContent = useCallback(async () => {
    // Get the index range of content to load
    if (isMoreLoading) return
    setIsMoreLoading(true)
  
    const start = lastIndex
    const end = lastIndex + limit
    
    setLastIndex(end)
  
    const moreContent = await getContent({
      contentType: contentType,
      noBody: 1,
      start: start,
      end: end,
    })
    
    if (moreContent.length < limit) setHasMore(false)
    setCards([
      ...cards,
      cardWrapper(moreContent)
    ])
    setIsMoreLoading(false)
  
    
  }, [cards, lastIndex, hasMore, isMoreLoading])

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMoreContent}
      hasMore={hasMore}
      initialLoad={false}
      loader={
        <div className="w-full max-w-[1032px] flex justify-center">
          <Oval
            visible={true}
            height={50}
            width={50}
            color="#6a6a6a"
            strokeWidth={3}
            secondaryColor="#9c9c9c"
            strokeWidthSecondary={3}
          />
        </div>
      }
      threshold={0}
      className={className}
    >
      <div className={classWrapper}>{cards}</div>
    </InfiniteScroll>
  )
}

export default InfiniteScrollCards
