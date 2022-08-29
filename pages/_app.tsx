import '../styles/globals.css'
import '../styles/fonts.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import { analytics } from '../firebase/firebaseAuth.client'
import { getAnalytics } from 'firebase/analytics'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      getAnalytics();
    }
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
