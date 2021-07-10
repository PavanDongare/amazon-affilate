import '../styles/index.css'
import Head from 'next/head';

import { Layout } from '@/components/layout/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/Amazon_icon.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
