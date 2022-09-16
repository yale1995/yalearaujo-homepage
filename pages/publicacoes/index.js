import Layout from '../../components/article'
import Link from 'next/link'

import styles from '../../styles/home.module.css'
import { Container, Heading, Text } from '@chakra-ui/react'

export default function Publications() {
  return (
    <Layout>
      <Container>
        <Link href="/">
          <a className={styles.link}>
            <Heading as="h1" fontSize={20} mt={10} mb={2}>
              Entendendo a teconologia mais amada do momento: o ReactJS
            </Heading>
          </a>
        </Link>
        <Text fontSize={15}>
          Afinal, para que serve? O que difere de usar JavaScript puro? É um
          framework ou biblioteca? Calma que eu te conto agora…
        </Text>
      </Container>
      <Container>
        <Link href="/">
          <a className={styles.link}>
            <Heading as="h1" fontSize={20} mt={10} mb={2}>
              Entendendo a teconologia mais amada do momento: o ReactJS
            </Heading>
          </a>
        </Link>
        <Text fontSize={15}>
          Afinal, para que serve? O que difere de usar JavaScript puro? É um
          framework ou biblioteca? Calma que eu te conto agora…
        </Text>
      </Container>
      <Container>
        <Link href="/">
          <a className={styles.link}>
            <Heading as="h1" fontSize={20} mt={10} mb={2}>
              Entendendo a teconologia mais amada do momento: o ReactJS
            </Heading>
          </a>
        </Link>
        <Text fontSize={15} mb={4}>
          Afinal, para que serve? O que difere de usar JavaScript puro? É um
          framework ou biblioteca? Calma que eu te conto agora…
        </Text>
      </Container>
    </Layout>
  )
}
