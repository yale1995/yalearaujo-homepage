import Head from 'next/head'
import Navbar from './navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../components/footer'

export const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Frontend - Yale Araújo</title>
        <meta
          name="description"
          content="Frontend Developer com mais de 2 anos de experiência. Desenvolvo aplicações responsivas, acessíveis e de alta performance. Clique no link para conhecer o meu trabalho."
        />
        <link rel="shortcut icon" href="/images/footprint-dark.svg" type="image/svg" />
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
        <Footer/>
      </Container>
    </Box>
  )
}
