import { Container, Box, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" mb={6} p={3} align="center">
        Hello, I am a frontend developer based in Brazil!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yale Araújo
          </Heading>
          <p>Frontend Developer (Mech Engineer / Developer / Creator) </p>
        </Box>
      </Box>
    </Container>
  )
}
