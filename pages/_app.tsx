import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { light } from '../scss/MaterialTheme';
import { useState } from 'react';
import '../scss/app.scss';
import '../scss/pc/main.scss';

export default function App({ Component, pageProps }: AppProps) {
  // Next.js ilovasi boshqariladi
  // @ts-ignore
  const [theme, setTheme] = useState(createTheme(light)); // mavzuni sozlash => dinamik

  // Socket.io, Redux, Mui ...
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
