import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './navbar.module.css'
import Button from './button'

const NavbarDesktop = () => {
  const router = useRouter()

  const menuIds = ['news', 'memes', 'interviews', 'jobs']
  const menuNames = {
    [menuIds[0]]: 'Web3 News',
    [menuIds[1]]: 'Memes',
    [menuIds[2]]: 'Interviews',
    [menuIds[3]]: 'Crypto Jobs',
  }
  const menu = menuIds.map(id =>
    <Link href={`/${id}`} key={id}>
      <a 
        className={
          `text-base py-2 pl-4 border-l-4 border-solid prim-trans w-[fit-content]
          ${router.asPath === '/' + id ? styles.active : styles.inactive}`
        }
      >{menuNames[id]}</a>
    </Link>
  )

  return (
    <div className="fixed tl flex flex-col w-[313px] h-screen right-border select-none">
      <Link href="/">
        <a className="bottom-border">
          <Image
            src="/assets/logo.svg"
            alt="The Dumpling logo"
            width={313}
            height={114} 
          />
        </a>
      </Link>
      
      <div className="py-8 px-6 flex flex-col">
        {menu}
      </div>
      
      <div className="px-6 pb-8 bottom-border">
        <Button href="https://dumpling.beehiiv.com/"/>
      </div>

      <div className="p-6 bottom-border">
        <a href="/" className="flex flex-row w-[fit-content]">
          <Image src="/assets/search-icon.svg" alt="search icon" width={14} height={16} />
          <p className="base-bold-text ml-6">Search</p>
        </a>
      </div>

      <div className="p-6 bottom-border">
        <a href="/" className="flex flex-row w-[fit-content]">
          <Image src="/assets/about-icon.svg" alt="search icon" width={20} height={20} />
          <p className="base-bold-text ml-4">About</p>
        </a>
      </div>

      <div className="p-6 flex flex-row justify-between items-center">
        <a 
          href="https://discord.com/invite/fortunefriendsclub" 
          className="bg-custom-blue centering h-10 w-[127px] rounded-full hover:bg-[#85a0d1]"
        >
          <Image src="/assets/discord-icon.svg" alt="discord icon" width={20} height={14}/>
          <p className="font-jakarta-bold text-white text-sm ml-4">Discuss</p>
        </a>

        <a 
          href="https://twitter.com/FortuneFriends_" 
          className="bg-custom-blue centering h-10 w-[127px] rounded-full hover:bg-[#85a0d1]"
        >
          <Image src="/assets/twitter-icon.svg" alt="discord icon" width={18} height={14}/>
          <p className="font-jakarta-bold text-white text-sm ml-4">Follow</p>
        </a>
      </div>

    </div>
  )
}

export default NavbarDesktop