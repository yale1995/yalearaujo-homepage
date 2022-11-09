import { api } from '../../services/api'
import { useState, useEffect } from 'react'

import Layout from '../../components/article'
import { Container, Badge, Stack } from '@chakra-ui/react'

import { Title } from '../../components/work'
import P from '../../components/paragraph'

export default function Publication(props) {
  const [publication, setPublication] = useState()

  var id = props.id
  
  useEffect(() => {
    getPublication()
  }, [])

  async function getPublication() {
    const response = await api.get(`publications/${id}`)
    setPublication(response?.data?.publication[0])
  }
  return (
    <Layout title={publication?.title}>
      <Container>
        <Title anchor="/publicacoes" link="Publicações">
          {publication?.title} <Badge>2021</Badge>
        </Title>
        <Stack spacing={2}>
          {publication?.content?.paragraph?.map((paragraph, index) => (
            <P key={index}>{paragraph}</P>
          ))}
        </Stack>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '1',
        },
      },
      {
        params: {
          id: '2',
        },
      },
    ],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.id

  return {
    props: {
      id: id,
    },
  }
}
