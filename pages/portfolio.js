import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/article'

import thumbIgnews from '../public/images/works/ignews.png'
import thumbWorldtrip from '../public/images/works/worldtrip.png'
import thumbRDP from '../public/images/works/rdp.png'

const Works = () => {
  return (
    <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Portfólio
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="ignews" title="ignews" thumbnail={thumbIgnews}>
           Venda de conteúdo para assinantes.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="worldtrip" title="Worldtrip" thumbnail={thumbWorldtrip}>
            Aplicação para agência de viagens.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Onde eu trabalhei
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="rumoadefensoria" title="Rumo a Defensoria" thumbnail={thumbRDP}>
           Venda de conteúdo para assinantes.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="worldtrip" title="Worldtrip" thumbnail={thumbWorldtrip}>
            Aplicação para agência de viagens.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
    </Layout>
  )
}

export default Works
