import '../styles/globals.css'
import type { AppProps } from 'next/app'

var  digitalData = {
  appName:'MY App'
};

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
