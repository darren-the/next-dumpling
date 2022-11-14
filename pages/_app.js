import '../styles/index.css'
import Layout from '../components/layout/layout'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp
