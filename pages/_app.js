import '../styles/globals.css'
import Navbar from '../components/navbar'
import { Fragment } from 'react/cjs/react.production.min'
import Script from 'next/script'
import NextNProgress from 'nextjs-progressbar'
function MyApp({ Component, pageProps }) {
console.log(pageProps);
  return <Fragment>
    <div className='bg-white'>
    <Script src="https://kit.fontawesome.com/ce6e920b0f.js"></Script>
<NextNProgress height={3} color="cyan" />
    <Navbar />
    <Component {...pageProps} />
    </div>
  </Fragment>
}

export default MyApp
