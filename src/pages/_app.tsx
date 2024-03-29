import '@/styles/global.css'
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { UIProvider } from 'src/context/ui';
import { darkTheme, lightTheme } from '../../themes';
import { EntriesProvider } from '../context/entries/EntriesProvider';
import { SnackbarProvider } from 'notistack';




export default function MyApp({ Component, pageProps }: AppProps) {
  return(
    
      <SnackbarProvider maxSnack={3}>
        <EntriesProvider>
          <UIProvider>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
          </UIProvider>
        </EntriesProvider>
      </SnackbarProvider>
    
  )
}
