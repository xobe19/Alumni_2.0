import '../styles/globals.css'
import Navbar from '../components/navbar'
import { Fragment } from 'react/cjs/react.production.min'
import Script from 'next/script'
function MyApp({ Component, pageProps }) {

  return <Fragment>
    <Script src="https://kit.fontawesome.com/ce6e920b0f.js"></Script>
    <Navbar />
    <Component {...pageProps} />
  </Fragment>
}

export default MyApp
