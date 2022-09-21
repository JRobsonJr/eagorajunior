import { Flex, Text, Image, Box, Grid } from 'theme-ui'

import type { ThemeUIStyleObject } from 'theme-ui'

import Link from './Link'
import IconTwitter from './Icons/IconTwitter'
import IconInstagram from './Icons/IconInstagram'
import IconEnvelope from './Icons/IconEnvelope'

const textContainerStyle: ThemeUIStyleObject = {
  gap: '1.5rem',
  alignItems: 'center',
  flexDirection: 'column',
  paddingY: '1.5rem',
  paddingX: [0, 0, 0, '1.5rem'],
}

const articleStyle: ThemeUIStyleObject = {
  paddingX: [0, 0, 0, '2rem'],
  fontFamily: 'sansSerif',
}

const menuStyle: ThemeUIStyleObject = {
  gap: '1rem',
  justifyContent: 'center',
  marginTop: '1rem',
}

const imageContainer: ThemeUIStyleObject = {
  gap: '1.5rem',
  alignItems: 'center',
  flexDirection: 'column',
}

const AuthorSection = () => (
  <Grid variant="section" id="sobre">
    <Flex sx={imageContainer}>
      <Image
        src="/robson.png"
        alt="Uma foto de Robson Junior."
        sx={{ maxWidth: ['100%', '80%', '80%', '100%'] }}
      />
    </Flex>
    <Flex sx={textContainerStyle}>
      <Text variant="sectionSubtitle">Um autor</Text>
      <Text variant="sectionTitle">Robson Junior</Text>
      <Box sx={articleStyle}>
        <Text>
          Prepare o seu coração / Pras coisas que eu vou contar / Eu venho lá do
          sertão... 🎶
          <br />
          <br />
          Olá, meu nome é Robson! Tenho 23 anos e vim bem literalmente lá do
          sertão, do interior da Paraíba. Sou formado em Ciência da Computação e
          tenho uma paixão por escrita. Já escrevo poemas há alguns anos e
          recentemente publiquei meu primeiro livro, <i>Eu diante de antieu</i>,
          pela Editora Folheando. Além disso, meu mais novo livro,{' '}
          <i>Daqui do quarto</i>, está em pré-venda e será publicado em breve
          pela Editora Urutau.
          <br />
          <br />
          Seria um prazer ser lido por você!
        </Text>
      </Box>
      <Flex sx={menuStyle}>
        <Link
          href="mailto:jrobsonjr16@gmail.com"
          variant="button"
          newTab
          ariaLabel="Email"
        >
          <IconEnvelope />
        </Link>
        <Link
          href="https://www.instagram.com/jrobsonjr"
          variant="button"
          newTab
          ariaLabel="Instagram"
        >
          <IconInstagram />
        </Link>
        <Link
          href="https://www.twitter.com/JRosboJr"
          variant="button"
          newTab
          ariaLabel="Twitter"
        >
          <IconTwitter />
        </Link>
      </Flex>
    </Flex>
  </Grid>
)

export default AuthorSection
