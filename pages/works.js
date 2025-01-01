import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbbatmovies2 from '../public/images/works/batmovies.png'
import thumbFreeDBTagger from '../public/images/works/antiguo.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      {<><Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          College Projects
        </Heading>
      </Section><SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem id="batmovies" thumbnail={thumbbatmovies2} title="Batmovies">
              Movie Database Website created for my web programming project
            </WorkGridItem>

          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="antiguo"
              thumbnail={thumbFreeDBTagger}
              title="Antiguo"
            >
              Shopping Website Created for my MERN project
            </WorkGridItem>
          </Section>

        </SimpleGrid></>}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
