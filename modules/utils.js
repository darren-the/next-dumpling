import { useEffect, useState } from "react";

export const useScreenWidth = () => {
  // handle window resizing
  const defaultWidth = (typeof window !== "undefined") ? window.innerWidth : '768px'
  const [windowSize, setWindowSize] = useState(defaultWidth)
  useEffect(() => {
      const handleWindowResize = () => {
          setWindowSize(window.innerWidth)
      }
      window.addEventListener('resize', handleWindowResize)
      console.log(windowSize)
      return () => {
          window.removeEventListener('resize', handleWindowResize)
      }
  }, [windowSize])
  return windowSize
}