import { Flex } from 'theme-ui'

import type { NextPage } from 'next'
import type { ThemeUIStyleObject } from 'theme-ui'

import AuthorSection from '../components/AuthorSection'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import SocialMediaSection from '../components/SocialMediaSection'
import BooksSection from '../components/BooksSection'

const NAVBAR_HEIGHT = 48

const bodyStyle: ThemeUIStyleObject = {
  flexDirection: 'column',
}

const containerStyle: ThemeUIStyleObject = {
  flexDirection: 'column',
  marginTop: NAVBAR_HEIGHT,
  gap: [0, 0, 0, '2rem'],
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
          <BooksSection />
          <SocialMediaSection />
          <AuthorSection />
        </Flex>
      </Flex>
    </>
  )
}

export default Home
