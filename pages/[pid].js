import { useRouter } from 'next/router'

const Preview = () => {
  const router = useRouter()

  return (
    <div className="">Temporary {router.asPath.slice(1)} page</div>
  )
}

export default Preview