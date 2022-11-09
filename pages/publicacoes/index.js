import { api } from '../../services/api'

import Layout from '../../components/article'
import NextLink from 'next/link'

import { Container, Heading, Text, Link } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Publications() {
  const [publication, setPublication] = useState()

  useEffect(() => {
    getPublication()
  }, [])

  async function getPublication() {
    const response = await api.get('publications/1')
    return setPublication(response?.data?.publication[0])
  }

  return (
    <Layout>
      <Container>
        <NextLink href="/publicacoes/1" passHref scroll={false}>
          <Link>
            <Heading as="h1" fontSize={20} mt={10} mb={2}>
              {publication?.title}
            </Heading>
          </Link>
        </NextLink>
        <Text fontSize={15}>{publication?.description}</Text>
      </Container>
      <Container>
        <NextLink href="/publicacoes/2" passHref scroll={false}>
          <Link>
            <Heading as="h1" fontSize={20} mt={10} mb={2}>
              {publication?.title}
            </Heading>
          </Link>
        </NextLink>
        <Text fontSize={15}>{publication?.description}</Text>
      </Container>
    </Layout>
  )
}
