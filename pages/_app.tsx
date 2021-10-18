import '../styles/base.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  //<SessionProvider session={session}>
  return <Component {...pageProps} />
  //</SessionProvider>
}

export default MyApp