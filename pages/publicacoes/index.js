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
    const response = await api.get('publications')
    return setPublication(response?.data?.publications)
  }

  return (
    <Layout>
      {publication?.map(item => (
        <Container key={item.id}>
          <NextLink href={`/publicacoes/${item.id}`} passHref scroll={false}>
            <Link>
              <Heading as="h1" fontSize={20} mt={10} mb={2}>
                {item.title}
              </Heading>
            </Link>
          </NextLink>
          <Text fontSize={15}>{item.description}</Text>
        </Container>
      ))}
    </Layout>
  )
}
