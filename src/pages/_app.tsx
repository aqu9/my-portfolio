import '@app/styles/globals.css'
import MUIThemeProvider from '@app/theme/MUIThemeProvider'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <MUIThemeProvider> 
  <Component {...pageProps} />
  </MUIThemeProvider>
  </> 

  )
}
