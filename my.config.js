export const headerConfig = { 
  news: {
    heading: "Latest Stories",
    subheading: "Dig into the top trending bao-sized stories",
  },
  interviews: {
    heading: "Interviews",
    subheading: "Learn more about the humans of web3",
  },
  rss: {
    heading: "More Stories",
    subheading: "Find more stories on what's happening",
  }
}

export const metadata = {
  news: {
    title: 'The Dumpling - Bao-sized News on Web 3.0, Asian Culture, Crypto, and NFTs',
    description: 'Read the latest news on asian culture, cryptocurrency, NFTs, and upcoming projects on the blockchain.',
  },
  memes: {
    title: 'The Dumpling - Things and memes that made us kek in Web 3.0, Asian Culture, Crypto, and NFTs',
    description: 'Memes and LOLs made by the web3 community on the internet. Get your latest memes and LOLs from the baos right here.'
  },
  interviews: {
    title: 'The Dumpling - Learn more about the Asian Creators',
    description: 'Learn more about the humans of Web3 and asian creators in this space through bao-sized interviews.',
  }
}

export const defaultConfigSEO = {
  title: metadata.news.title,
  description: metadata.news.description,
  openGraph: {
    title: metadata.news.title,
    description: metadata.news.description,
    images: [
      {
        url: 'https://www.thedumpling.xyz/assets/opengraph-image.jpg',
        width: 1200,
        height: 627,
        alt: 'The Dumpling open graph image',
        type: 'image/jpeg',
      }
    ]
  }
}