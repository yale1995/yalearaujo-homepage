import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  Stack,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/article'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { FaTwitter, FaLinkedinIn, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import styles from '../styles/home.module.css'

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
              src="./images/123.jpeg"
              alt="Profile image"
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
              nordestino e apaixonado por tecnologia!
            </Paragraph>
            <Paragraph>
              Iniciou sua carreira na área de tecnologia aos 18 anos quando
              ingressou na universidade e implementou suas primeiras linhas de
              código utilizando as linguagens Python e C++.
            </Paragraph>
            <Paragraph>
              Tornou-se Bacharel em Ciências e Tecnologia em 2018 e Engenheiro
              Mecânico em 2020 ambos pela Universidade Federal do Rio Grande do
              Norte (UFRN)
            </Paragraph>
            <Paragraph>
              Atualmente Yale é Frontend Developer na LeadMark, onde constrói
              aplicações de alta performance, voltadas para área de marketing,
              com foco na conversão de clientes.
            </Paragraph>
            <Paragraph>
              O perfil profissional de Yale Araújo está disponível no{' '}
              <NextLink href="http://linkedin.com/in/yalearaujo">
                <a className={styles.link}> Linkedin</a>
              </NextLink>
              .
            </Paragraph>
          </Stack>
          <Box align="center" my={4}>
            <NextLink href="/works">
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
              <NextLink href="https://twitter.com/yale_araujo">
                <a className={styles.link}>
                  <ListIcon as={FaTwitter} />
                  @yale1995
                </a>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href="http://linkedin.com/in/yalearaujo">
                <a className={styles.link}>
                  <ListIcon as={FaLinkedin} />
                  Yale Araújo
                </a>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href="https://twitter.com/yale_araujo">
                <a className={styles.link}>
                  <ListIcon as={FaGithub} />
                  @yale1995
                </a>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href="mailto:yale850@gmail.com?subject=Quero te contratar">
                <a className={styles.link}>
                  <ListIcon as={SiGmail} />
                  yale850@gmail.com
                </a>
              </NextLink>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}
