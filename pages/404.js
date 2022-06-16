import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Erro 404 Not found</Heading>
      <Text>Página em desenvolvimento. Clique no botão para retornar ao home.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Retornar ao home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
