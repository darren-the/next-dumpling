import Image from "next/image"

const Header = ({ contentType }) => {
  const news = {
    heading: "Latest Stories",
    subheading: "Dig into the top trending bao-sized stories",
  }
  const interviews = {
      heading: "Interviews",
      subheading: "Learn more about the humans of web3",
  }
  const rss = {
      heading: "More Stories",
      subheading: "Find more stories on what's happening",
  }

  const options = { news, interviews, rss }
  
  return (
      <div className="mb-8">
          <div className="flex relative">
              <h1 className="mr-[10px] heading-extrabold">{options[contentType].heading}</h1>
                <Image src="/assets/home-arrow-icon.svg" alt="home arrow icon" width={20} height={28} />
          </div>
          <p className="base-medium-text">{options[contentType].subheading}</p>
      </div>
  )
}

export default Header