import { useEffect, useState } from "react"
import { getTickers } from '../../modules/tickers/tickers'
import Image from 'next/image'

const Tickers = () => {
  const [tickers, setTickers] = useState()
  useEffect(() => {
    getTickers().then((data) => {
      const tickerComponents = Object.keys(data).map((key, index) => {
        const ticker = data[key]
        const priceChange = ticker.quote.USD.percent_change_24h
        const priceChangeStr = ((priceChange >= 0) ? "+" : "") + priceChange.toFixed(2) + "%"
        return (
          <div className="px-8 centering bottom-border right-border top-border min-w-[275px] md:border-t-0" key={index}>
            <div className="w-10 h-10">
              <Image 
                src={`/assets/tickers-square${index}.svg`}
                alt={`ticker icon ${index}`}
                width={40}
                height={40}
                layout="fixed"
              />
            </div>
              
    
            <div className="ml-3 flex flex-col justify-evenly w-full font-jakarta-bold">
              <div className="min-w-[133px] w-full flex justify-between">
                <p className="text-base leading-4">{ticker.name}</p>
                <p className="ml-3">{'$' + parseFloat(ticker.quote.USD.price.toFixed(2)).toLocaleString()}</p>
              </div>
              <div className="min-w-[133px] w-full flex justify-between">
                <p className="text-sm leading-[0.875rem] text-custom-darkgray">{ticker.symbol + " (24h)"}</p>
                <p className="text-sm leading-[0.875rem]" style={{ color: (priceChange >= 0) ? "#70D186" : "red" }}>{priceChangeStr}</p>
              </div>
            </div>
            
          </div>
        )
      })
      setTickers(tickerComponents)
    })
  }, [])
  
  
  return (
    <div className="z-10 h-[60px] md:ml-[313px] w-full md:w-[calc(100vw-313px)]
      grid grid-cols-3-1fr bg-white fixed top-[56px] md:top-0 overflow-y-scroll">
      {tickers}
    </div>
  )
}

export default Tickers