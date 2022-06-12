import { Flex, Text } from 'theme-ui'

import type { ThemeUIStyleObject } from 'theme-ui'
import type { NextPage } from 'next'

import Navbar from '../components/Navbar'
import Meta from '../components/Meta'
import Link from '../components/Link'
import Poem from '../components/Poem'
import IconChevronLeft from '../components/Icons/IconChevronLeft'

const NAVBAR_HEIGHT = 48

const containerStyle: ThemeUIStyleObject = {
  flexDirection: 'column',
  marginTop: NAVBAR_HEIGHT,
  padding: ['2rem', '2rem', '2rem', '3rem'],
}

// TODO: Create an amostra.mdx instead.
const Amostra: NextPage = () => {
  const metaProps = {
    title: 'Amostra',
    description:
      'Amostra do livro "Eu diante de antieu", de autoria de Robson Junior.',
  }

  return (
    <>
      <Meta {...metaProps} />
      <Flex>
        <Navbar />
        <Flex sx={containerStyle}>
          <Link href="/" variant="navigation">
            <IconChevronLeft size={12} />
            <Text>Voltar ao início</Text>
          </Link>
          <Poem />
        </Flex>
      </Flex>
    </>
  )
}

export default Amostra
