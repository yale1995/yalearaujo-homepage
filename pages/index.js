import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

export default function Home() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        mb={6}
        p={3}
        align="center"
      >
        Hello, I am a frontend developer based in Brazil!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yale Araújo
          </Heading>
          <p>Frontend Developer (Mech Engineer / Developer / Creator) </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxW="100px"
            display="inline-block"
            borderRadius="full"
            src="./images/123.jpeg"
            alt="Profile image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Yale is a frontend software developer who was born in Brazil.
          Passionate about technology, he has already programmed using C++,
          Python and JavaScript. He has a knack for all things launching
          products, ffrom planning and designing all the way to solving
          real-life problems with code. When not online, he loves playing guitar
          and singing some songs. Currently, he is working at LeadMark. He
          publishes content for beginers developers in your profile at
          <NextLink href="http://linkedin.com/in/yalearaujo">
            <Link> Linkedin</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button colorScheme="teal" rightIcon={<ChevronRightIcon />}>
              My portfólio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Born in Natal/RN, Brazil.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed the Bachelor in Science and Technology at UFRN.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the Graduation in Mechanical Engineering at UFRN.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at Rumo a Defensoria.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Working at LeadMark.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music, Dogs, Beach and League of Legends
        </Paragraph>
      </Section>
    </Container>
  )
}
