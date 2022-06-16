import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/article'

import thumbIgnews from '../public/images/works/ignews.png'
import thumbDtmoney from '../public/images/works/dtmoney.png'
import thumbTodo from '../public/images/works/to-do.png'

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
            Paid content to subscribers.
            payment.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="dtmoney" title="dtmoney" thumbnail={thumbDtmoney}>
            Financial app to organize monthly expenses.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="todolist" title="to-do-list" thumbnail={thumbTodo}>
            Activity management app
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
    </Layout>
  )
}

export default Works
