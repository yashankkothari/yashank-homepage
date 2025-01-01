import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="batmovies">
    <Container>
      <Title>
        Batmovies <Badge>2023</Badge>
      </Title>
      <P>
        A Movie Database build using css,html,php which displays trending movies using TMDB api, also searches movies, adds to watchlist, can also add reviews
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, HTML, MySQL, CSS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/batmovies.png" alt="batmovies" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
