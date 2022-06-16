import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/article'

const Work = () => (
  <Layout title="ignews">
    <Container>
      <Title>
        ig.news <Badge>2020</Badge>
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
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, TypeScript, Styled-Components</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ignews.png" alt="Ignews" />
      <WorkImage src="/images/works/ignews2.png" alt="Ignews" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
