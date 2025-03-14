import { Flex, Text, Image, Grid } from 'theme-ui'

import type { ThemeUIStyleObject } from 'theme-ui'

import Link from './Link'

const contentContainerStyle: ThemeUIStyleObject = {
  gap: '1.5rem',
  flexDirection: 'column',
}

const menuStyle: ThemeUIStyleObject = {
  gap: '1rem',
  justifyContent: 'center',
  flexDirection: ['column', 'row'],
}

const imageContainerStyle: ThemeUIStyleObject = {
  justifyContent: 'center',
}

const imageStyle: ThemeUIStyleObject = {
  maxWidth: ['100%', '100%', '80%', '100%']
}

const AuthorSection = () => (
  <Grid id="sobre" variant="section">
    <Flex sx={imageContainerStyle}>
      <Image
        src="/eu.png"
        alt="Uma foto de Robson Junior de costas e com rosto virado à direita. Na camiseta preta, em um papel colado às costas, lê-se: 'Olá, meu nome é...'."
        sx={imageStyle}
      />
    </Flex>
    <Flex sx={contentContainerStyle}>
      <Text variant="headline">
        Autor paraibano, best-seller <s>(dentro da minha casa)</s>.
        Escrevo poesia, moro com meu gato e escuto música.
      </Text>
      <Flex sx={menuStyle}>
        <Link
          href="https://www.instagram.com/eagorajunior/"
          variant="button"
          newTab
        >
          Instagram
        </Link>
        <Link
          href="https://eagorajunior.substack.com/"
          variant="button"
          newTab
        >
          Substack
        </Link>
        <Link
          href="mailto:jrobsonjr16@gmail.com"
          variant="button"
          newTab
        >
          Email
        </Link>
      </Flex>
    </Flex>
  </Grid>
)

export default AuthorSection
