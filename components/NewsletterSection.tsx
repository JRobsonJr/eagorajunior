import { Flex, Text, Image, Box, Grid } from 'theme-ui'

import type { ThemeUIStyleObject } from 'theme-ui'

import IconTwitter from './Icons/IconTwitter'
import IconInstagram from './Icons/IconInstagram'
import Link from './Link'

const textContainerStyle: ThemeUIStyleObject = {
  gap: '1.5rem',
  alignItems: 'center',
  flexDirection: 'column',
  paddingY: '1.5rem',
  paddingX: [0, 0, 0, '1.5rem'],
  gridRowStart: [2, 2, 2, 1],
}

const articleStyle: ThemeUIStyleObject = {
  paddingX: [0, 0, 0, '2rem'],
  fontFamily: 'sansSerif',
}

const ulStyle: ThemeUIStyleObject = {
  marginTop: '1rem',
  listStyleType: 'none',
  paddingLeft: '.5rem',
  'li:before': {
    content: '"✨"',
    paddingRight: '.5rem',
  },
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

const NewsletterSection = () => (
  <Grid variant="section" id="newsletter">
    <Flex sx={textContainerStyle}>
      <Text variant="sectionSubtitle">Uma newsletter</Text>
      <Text variant="sectionTitle">E agora, Junior?</Text>
      <Box as="article" sx={articleStyle}>
        <Text>
          Entregue a cada duas semanas (juro que eu tento), incluindo os
          seguintes conteúdos imperdíveis:
        </Text>
        <Box as="ul" sx={ulStyle}>
          <li>atualizações sobre escrita,</li>
          <li>descobertas simples do dia a dia,</li>
          <li>o que eu ando fazendo (às vezes é algo interessante!),</li>
          <li>poemas meus e de outros autores que eu adoro,</li>
          <li>recomendações de músicas e livros,</li>
          <li>e talvez muito mais!</li>
        </Box>
      </Box>
      <Flex sx={menuStyle}>
        <Link
          href="https://www.getrevue.co/profile/jrobsonjr"
          variant="button"
          newTab
        >
          Assine já!
        </Link>
        <Link
          href="https://www.instagram.com/eagorajunior"
          variant="button"
          newTab
        >
          <IconInstagram />
        </Link>
        <Link
          href="https://www.twitter.com/eagorajunior"
          variant="button"
          newTab
        >
          <IconTwitter />
        </Link>
      </Flex>
    </Flex>
    <Flex sx={imageContainer}>
      <Image
        src="/eaj.png"
        alt="Arte da newsletter 'E agora, Junior?'"
        sx={{ maxWidth: ['100%', '80%', '80%', '100%'] }}
      />
    </Flex>
  </Grid>
)

export default NewsletterSection
