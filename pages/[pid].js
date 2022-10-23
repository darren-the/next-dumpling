import { useRouter } from 'next/router'

const Preview = () => {
  const router = useRouter()

  return (
    <div className="mt-16">Temporary {router.asPath.slice(1)} page</div>
  )
}

export default Preview