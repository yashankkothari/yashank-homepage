import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Yashank's homepage" />
        <meta name="author" content="Yashank Kothari" />
        <meta name="author" content="yashankhome" />
        <link rel="yk" href="yk.png" />
        <link rel="shortcut icon" href="/yk.png" type="image/x-icon" />
        <meta name="twitter:title" content="Yashank Kothari" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yashankhome" />
        <meta name="twitter:creator" content="@yashankhome" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Yashank Kothari" />
        <meta name="og:title" content="Yashank Kothari" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Yashank Kothari - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
