import Layout from '../../components/article'
import NextLink from 'next/link'

import { Container, Heading, Text, Link } from '@chakra-ui/react'

export default function Publications() {
  return (
    <Layout>
      <Container>
        <NextLink href='/' passHref scroll={false}>
          <Link>
            <Heading as="h1" fontSize={20} mt={10} mb={2}>
              Entendendo a teconologia mais amada do momento: o ReactJS
            </Heading>
          </Link>
        </NextLink>
        <Text fontSize={15}>
          Afinal, para que serve? O que difere de usar JavaScript puro? É um
          framework ou biblioteca? Calma que eu te conto agora…
        </Text>
      </Container>
      <Container>
        <NextLink href='/' passHref scroll={false}>
          <Link>
            <Heading as="h1" fontSize={20} mt={10} mb={2}>
              Entendendo a teconologia mais amada do momento: o ReactJS
            </Heading>
          </Link>
        </NextLink>
        <Text fontSize={15}>
          Afinal, para que serve? O que difere de usar JavaScript puro? É um
          framework ou biblioteca? Calma que eu te conto agora…
        </Text>
      </Container>
      <Container>
        <NextLink href='/' passHref scroll={false}>
          <Link>
            <Heading as="h1" fontSize={20} mt={10} mb={2}>
              Entendendo a teconologia mais amada do momento: o ReactJS
            </Heading>
          </Link>
        </NextLink>
        <Text fontSize={15} mb={4}>
          Afinal, para que serve? O que difere de usar JavaScript puro? É um
          framework ou biblioteca? Calma que eu te conto agora…
        </Text>
      </Container>
    </Layout>
  )
}