import { NextSeo } from 'next-seo'

const Jobs = () => {
  return (
    <div className="p-8">
      <NextSeo
        title="Jobs - The Dumpling"
      />
      <h1 className="heading-extrabold">No jobs currently available</h1>
    </div>
  )
}

export default Jobs