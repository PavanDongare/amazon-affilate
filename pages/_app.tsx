import '../styles/index.css'
import Head from 'next/head';

import { Layout } from '@/components/layout/Layout';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()


function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Head>
          <link rel="shortcut icon" href="/Amazon_icon.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>

  )
}

export default MyApp
