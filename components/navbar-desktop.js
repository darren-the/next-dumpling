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
          `font-jakarta-bold text-base py-2 pl-4 border-l-4 border-solid prim-trans w-[fit-content]
          ${router.asPath === '/' + id ? styles.active : styles.inactive}`
        }
      >{menuNames[id]}</a>
    </Link>
  )

  return (
    <div className="fixed tl flex flex-col w-[313px] h-screen right-border">
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
      
      <div className="py-8 px-6 flex flex-col select-none">
        {menu}
      </div>
      
      <div className="px-6 pb-8 bottom-border">
        <Button href="https://dumpling.beehiiv.com/"/>
      </div>

    </div>
  )
}

export default NavbarDesktop