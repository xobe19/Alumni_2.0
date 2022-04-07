import '../styles/globals.css'
import Navbar from '../components/navbar'
import { Fragment } from 'react/cjs/react.production.min'
import Script from 'next/script'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import ScrollToTop from 'react-scroll-to-top'
function MyApp({ Component, pageProps }) {
console.log(pageProps);
  return <Fragment>
    <Head> 
    <title>
    CVR Alumni 
      </title>
  </Head>
    <div className='bg-white'>
    <Script src="https://kit.fontawesome.com/ce6e920b0f.js"></Script>
<NextNProgress height={3} color="cyan" />
    <Navbar />
    <Component {...pageProps} />
   <ScrollToTop smooth style={{width: "auto", height: "auto", padding: "7px"}}/> 
    </div>
  </Fragment>
}

export default MyApp
