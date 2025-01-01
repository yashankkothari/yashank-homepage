import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbbatmovies2 from '../public/images/works/batmovies.png'
import thumbFreeDBTagger from '../public/images/works/antiguo.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

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
