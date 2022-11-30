import Image from 'next/image'
import { headerConfig } from '../my.config'

const Header = ({ contentType }) => {
  return (
      <div className="mb-8">
          <div className="flex relative">
              <h1 className="mr-[10px] heading-extrabold">{headerConfig[contentType].heading}</h1>
                <Image
                  src="/assets/home-arrow-icon.svg"
                  alt="home arrow icon"
                  width={20}
                  height={28}
                  priority={true}
                />
          </div>
          <p className="base-medium-text">{headerConfig[contentType].subheading}</p>
      </div>
  )
}

export default Header