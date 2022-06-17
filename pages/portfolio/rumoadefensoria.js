import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/article'

const Work = () => (
  <Layout title="Rumo a Defensoria">
    <Container>
      <Title>
        Rumo a Defensoria <Badge>2021</Badge>
      </Title>
      <P>
        O Curso e Blog RDP foi pensado para aqueles que querem alcançar o sonho
        de serem Defensores Públicos. O curso e Blog prezam pela democratização
        do conhecimento, razão pela qual tem empregado grandes esforços para
        ajudar centenas de pessoas pelo Brasil.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Site</Meta>
          <Link href="https://rumoadefensoria.com/">
          https://rumoadefensoria.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platforma</Meta>
          <span>Web</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/rdp.png"
        alt="Aplicação Rumo a Defensoria"
      />
      <WorkImage
        src="/images/works/rdp-mobile.png"
        alt="Página da aplicação Ignews"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
