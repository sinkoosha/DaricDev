import "@/styles/globals.css"
import {
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    typography: {
      fontFamily: "vazir",
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
