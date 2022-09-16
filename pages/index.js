import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Stack,
  List,
  ListItem,
  ListIcon,
  Link,
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/article'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          my={6}
          p={3}
          align="center"
        >
          Seja bem vindo ao meu portfólio!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Yale Araújo
            </Heading>
            <p>Frontend Developer (Engenheiro / Desenvolvedor) </p>
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
              src="./images/profile.jpeg"
              alt="Imagem de avatar"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Resumo
          </Heading>
          <Stack>
            <Paragraph>
              Yale é um desenvolvedor de software frontend. Brasileiro,
              nordestino e apaixonado por tecnologia! Iniciou sua carreira na
              área de tecnologia aos 18 anos quando ingressou na universidade e
              implementou suas primeiras linhas de código utilizando as
              linguagens Python e C++.
            </Paragraph>
            <Paragraph>
              Tornou-se Bacharel em Ciências e Tecnologia em 2018 e Engenheiro
              Mecânico em 2020 ambos pela Universidade Federal do Rio Grande do
              Norte (UFRN).
            </Paragraph>
            <Paragraph>
              Yale atuou no time de desenvolvimento da plataforma de cursos Rumo
              A Defensoria (RDP), onde contribuiu no frontend das aplicações da
              empresa. Atualmente ocupa o cargo de Frontend Developer na
              LeadMark, desenvolvendo aplicações de alta performance, com as
              principais tecnologias do escossistema frontend. Maiores
              informações profissionais e acadêmicas estão dispostas no perfil
              do
              <NextLink
                href="http://linkedin.com/in/yalearaujo"
                passHref
                scroll={false}
              >
                <Link> Linkedin</Link>
              </NextLink>
              .
            </Paragraph>
          </Stack>
          <Box align="center" my={4}>
            <NextLink href="/portfolio">
              <Button colorScheme="teal" rightIcon={<ChevronRightIcon />}>
                Meu portfólio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experiências
          </Heading>
          <BioSection>
            <BioYear>2017</BioYear>
            Cofundador Sólidus Júnior
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Engenheiro na empresa Menezes Comércio e Serviços LTDA.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Frontend Developer na empresa Rumo a Defensoria
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Frontend Developer na empresa LeadMark
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Formação
          </Heading>
          <BioSection>
            <BioYear>2018</BioYear>
            Bacharel em Ciências e Tecnologia pela UFRN
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Engenheiro Mecânico pela UFRN
          </BioSection>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Conhecimentos
          </Heading>
          <Paragraph>
            JavaScript, TypeScript, ReactJS, NextJS, Chakra-UI, Material-UI,
            Styled-Components, SASS, HTML e CSS.
          </Paragraph>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Contato
          </Heading>
          <List>
            <ListItem>
              <NextLink
                href="https://twitter.com/yale_araujo"
                passHref
                scroll={false}
              >
                <Link>
                  <ListIcon as={FaTwitter} alt="Ícone twitter" />
                  @yale1995
                </Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink
                href="http://linkedin.com/in/yalearaujo"
                passHref
                scroll={false}
              >
                <Link>
                  <ListIcon as={FaLinkedin} alt="Ícone linkedin" />
                  Yale Araújo
                </Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink
                href="https://twitter.com/yale_araujo"
                passHref
                scroll={false}
              >
                <Link>
                  <ListIcon as={FaGithub} alt="Ícone github" />
                  @yale1995
                </Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink
                href="mailto:yale850@gmail.com?subject=Quero te contratar"
                passHref
                scroll={false}
              >
                <Link>
                  <ListIcon as={SiGmail} alt="Ícone gmail" />
                  yale850@gmail.com
                </Link>
              </NextLink>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}
