import { Flex } from 'theme-ui'

import type { NextPage } from 'next'
import type { ThemeUIStyleObject } from 'theme-ui'

import AuthorSection from '../components/AuthorSection'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import SocialMediaSection from '../components/SocialMediaSection'
import BooksSection from '../components/BooksSection'
import StoreSection from '../components/StoreSection'
import Footer from '../components/Footer'

const NAVBAR_HEIGHT = 48 * 2

const bodyStyle: ThemeUIStyleObject = {
  flexDirection: 'column',
  backgroundColor: '#171717',
}

const containerStyle: ThemeUIStyleObject = {
  flexDirection: 'column',
  marginTop: NAVBAR_HEIGHT,
  color: 'white',
  alignItems: 'center',
}

const Home: NextPage = () => {
  const metaProps = {
    title: 'Início',
    description:
      'Site do autor Robson Junior. Livros, newsletter e (quem sabe) muito mais!',
  }

  return (
    <>
      <Meta {...metaProps} />
      <Flex sx={bodyStyle}>
        <Navbar />
        <Flex sx={containerStyle}>
          <AuthorSection /> 
          <BooksSection />
          <StoreSection />
          <SocialMediaSection />
          <Footer />
        </Flex>
      </Flex>
    </>
  )
}

export default Home
