import '@/styles/global.css'
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { darkTheme, lightTheme } from '../themes';




export default function MyApp({ Component, pageProps }: AppProps) {
  return(
    
    
      <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
          <Component {...pageProps} />
      </ThemeProvider>
    
  )
}
