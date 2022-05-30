import { ChakraProvider } from '@chakra-ui/react'
import { Main } from '../components/main'
import theme from '../lib/theme'
import Fonts from '../components/fonts'

export default function App({Component, pageProps, router}) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  )
}
