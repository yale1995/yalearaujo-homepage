import { Container, Badge, Link, List, ListItem, AspectRatio } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/article'

const Work = () => (
  <Layout title="ignews">
    <Container>
      <Title>
        ig.news <Badge>2022</Badge>
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
          <span>ReactJS, TypeScript, Styled-Components</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ignews.png" alt="Aplicação Ignews" />
      <WorkImage
        src="/images/works/ignews2.png"
        alt="Página da aplicação Ignews"
      />
      <AspectRatio ratio={1.7} my={4}>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6905228723394547712"
          height="1301"
          width="504"
          frameBorder
          allowFullScreen
          title="Publicação incorporada"
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
