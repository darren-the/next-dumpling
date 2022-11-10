import { useEffect, useState } from "react";

export const useScreenWidth = () => {
  // handle window resizing
  const [windowSize, setWindowSize] = useState('768px');
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