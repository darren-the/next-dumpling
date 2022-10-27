import Image from "next/image"

const Header = () => {
  const News = {
    heading: "Latest Stories",
    subheading: "Dig into the top trending bao-sized stories",
  }
  const Interviews = {
      heading: "Interviews",
      subheading: "Learn more about the humans of web3",
  }
  const Rss = {
      heading: "More Stories",
      subheading: "Find more stories on what's happening",
  }

  const options = { News, Interviews, Rss}
  
  return (
      <div className="mb-8">
          <div className="flex">
              <h1 className="mr-[2.5rem] text-[2rem] font-jakarta-extrabold text-black">{options.heading}</h1>
              <Image src="../public/assets/home-arrow-icon.svg" alt="home arrow icon" width={20} height={28} />
          </div>
          <p className="base-medium-text">{options.subheading}</p>
      </div>
  )
}

export default Header