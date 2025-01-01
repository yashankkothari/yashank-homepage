import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="anTIguo">
    <Container>
      <Title>
        Antiguo <Badge>2024</Badge>
      </Title>

      <P>
      Antiguo is a fashion e-commerce website that aims to make designer clothing accessible to a broader audience by offering rental and purchase options. Users can browse a curated collection of high-end fashion, select items for special occasions, and either rent or buy them. The platform also promotes sustainable fashion by encouraging rentals, helping reduce the environmental impact of fast fashion.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MERN</span>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2024/10/25</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/antiguo.png" alt="anTIguo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
