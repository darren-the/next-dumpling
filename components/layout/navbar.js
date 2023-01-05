import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './navbar.module.css'
import Button from '../button'
import { useState } from 'react'

const Navbar = () => {
  const router = useRouter()

  const menuIds = ['', 'news', 'memes', 'interviews', 'jobs']
  const menuNames = {
    [menuIds[0]]: 'Home',
    [menuIds[1]]: 'Web3 News',
    [menuIds[2]]: 'Memes',
    [menuIds[3]]: 'Interviews',
    [menuIds[4]]: 'Crypto Jobs',
  }
  const menu = menuIds.map(id => {
    const menuClass = `text-base py-2 pl-4 border-l-4 border-solid prim-trans w-[fit-content] ${router.asPath === '/' + id ? styles.active : styles.inactive}`
    return (id === 'jobs')
      ? <a href="https://cryptojobs.xyz/" className={menuClass}>{menuNames[id]}</a>
      : <Link href={`/${id}`} key={id}>
          <a 
            className={menuClass}
          >{menuNames[id]}</a>
        </Link>
  })

  const [showNav, setShowNav] = useState(false)
  const [grayscreenStyle, setGrayscreenStyle] = useState('hidden')
  const [navPosition, setNavPosition] = useState('left-[-225px]')
  const toggleNav = () => {
    if (showNav) {
      setShowNav(false)
      setNavPosition('left-[-225px]')
      setGrayscreenStyle('hidden')
    } else {
      setShowNav(true)
      setNavPosition('left-0')
      setGrayscreenStyle('inline-block')
    }
    console.log(navPosition)
  }

  const mobileHeader = (
    <div className="h-[56px] w-screen fixed top-0 left-0 centering z-10 bg-white md:hidden">
      <button className="bg-none border-none absolute left-6 cursor-pointer centering" onClick={toggleNav}>
        <Image
          src={'/assets/navbar-expand-btn.svg'}
          alt="expand button"
          height={18}
          width={19}
          priority={true}
        />
      </button>
      <Link href="/">
        <a className="select-none centering">
          <Image
            src={'/assets/logo-small.svg'}
            alt="navbar tight logo"
            height={47}
            width={151}
            priority={true}
          />
        </a>
      </Link>     
    </div>
  )

  return (
    <div>
      {mobileHeader}
      <button
        className={`fixed top-0 left-0 h-screen w-screen bg-custom-darkgray opacity-50 select-none z-20 ${grayscreenStyle}`}
        onClick={toggleNav}
      />
      <div className={`bg-white fixed tl flex flex-col w-[225px] md:w-[313px] h-screen right-border
            select-none md:left-0 z-30 prim-trans ${navPosition}`}>
        <Link href="/">
          <a className="bottom-border">
            <Image
              src="/assets/logo.svg"
              alt="The Dumpling logo"
              width={313}
              height={114}
              priority={true}
            />
          </a>
        </Link>
        
        <div className="py-8 px-6 flex flex-col">
          {menu}
        </div>
        
        <div className="h-[72px] md:h-[84px] px-6 pb-8 bottom-border">
          <div className="h-[52px]">
            <Button href="https://dumpling.beehiiv.com/"/>
          </div>
        </div>

        {/* <div className="p-6 bottom-border">
          <div className="flex flex-row w-[fit-content]">
            <Image
              src="/assets/search-icon.svg"
              alt="search icon"
              width={14}
              height={16}
              priority={true}
            />
            <p className="base-bold-text ml-6">Search</p>
          </div>
        </div> */}

        <div className="p-6 bottom-border">
          <a
            href=" https://medium.com/@fortunefriendsclub/the-dumpling-bite-sized-nft-news-c1527bacec52"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-row w-[fit-content]">
              <Image
                src="/assets/about-icon.svg"
                alt="about icon"
                width={20}
                height={20}
                priority={true}
              />
              <p className="base-bold-text ml-4">About</p>
            </div>
          </a>
        </div>

        <div className="px-[18px] py-[12px] md:p-6 flex flex-row justify-between items-center gap-x-[8.5px]">
          <a 
            href="https://discord.com/invite/fortunefriendsclub" 
            className={styles.socialBtn}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/discord-icon.svg"
              alt="discord icon"
              width={20}
              height={14}
              priority={true}
            />
            <p className={styles.socialText}>Discuss</p>
          </a>

          <a 
            href="https://twitter.com/FortuneFriends_" 
            className={styles.socialBtn}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/twitter-icon.svg"
              alt="discord icon"
              width={18}
              height={14}
              priority={true}
            />
            <p className={styles.socialText}>Follow</p>
          </a>
        </div>

      </div>
    </div>
    
  )
}

export default Navbar