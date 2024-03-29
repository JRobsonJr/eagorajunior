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
        src="/eueu.png"
        alt="Uma foto de Robson Junior."
        sx={{ maxWidth: ['100%', '80%', '80%', '100%'] }}
      />
    </Flex>
    <Flex sx={textContainerStyle}>
      <Text variant="sectionSubtitle">Eu, um autor</Text>
      <Text variant="sectionTitle">Robson Junior</Text>
      <Box sx={articleStyle}>
        <Text>
          Prepare o seu coração / Pras coisas que eu vou contar / Eu venho lá do
          sertão... 🎶
          <br />
          <br />
          Olá, meu nome é Robson! Tenho 24 anos e vim bem literalmente lá do
          sertão: de Patos, cidade do interior da Paraíba. Sou graduado em
          Ciência da Computação pela UFCG e apaixonado por escrita. Sempre
          gostei de escrever qualquer tipo de coisa, mas desenvolvi, ao longo da
          minha vida, uma afeição por poesia. Em 2022, publiquei meus dois
          primeiros livros: <i>Eu diante de antieu</i>, pela Editora Folheando,
          e <i>Daqui do quarto</i>, pela Editora Urutau. Acabo de lançar, também
          pela Editora Urutau, meu terceiro livro,{' '}
          <i>Para estreitar os tatos</i>.
          <br />
          <br />
          Seria um prazer ser lido por você, viu?
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
