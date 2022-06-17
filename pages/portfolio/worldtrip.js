import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/article'

const Work = () => (
  <Layout title="World Trip">
    <Container>
      <Title>
        World Trip <Badge>2022</Badge>
      </Title>
      <P>
        Ig.news é uma plataforma de criação de conteúdo para assinantes. A
        ferramenta dispõe de sistema de pagamentos por cartão de crédito e CMS,
        promovendo uma interface amigável para os usuários.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repositório</Meta>
          <Link href="https://github.com/yale1995/ignews">
            https://github.com/yale1995/ignews <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platforma</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Tecnologias</Meta>
          <span>ReactJS, TypeScript e Chakra-UI</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/worldtrip.png" alt="Aplicação Ignews" />
      <WorkImage
        src="/images/works/worldtrip-mobile.png"
        alt="Página da aplicação Ignews"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
