import '../styles/index.css'
import Layout from '../components/layout/layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { DefaultSeo } from 'next-seo'
import { defaultConfigSEO } from '../my.config'
import Script from 'next/script'

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Script 
          id="Adsense-id"
          data-ad-client="ca-pub-6733088504690949"
          async="true"
          strategy="afterInteractive"
          onError={ (e) => { console.error('Script failed to load', e) }}
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin='anonymous'
        />
        <DefaultSeo {...defaultConfigSEO} />
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp
