import '@/styles/global.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';


const basicTheme = createTheme({
  palette:{
    mode: 'dark'
  }
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return(
    
  <ThemeProvider theme={basicTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
  </ThemeProvider>
  )
}
