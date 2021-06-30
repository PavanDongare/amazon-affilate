import '../styles/index.css'
import Footer from '@/components/footer'
import { Layout } from '@/components/layout/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
