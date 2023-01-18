import { Grid, Flex, Image, Text } from 'theme-ui'

import type { FC } from 'react'
import type { ThemeUIStyleObject } from 'theme-ui'

import Link from './Link'

const containerStyle: ThemeUIStyleObject = {
  padding: ['1rem', '1rem', '1rem', '4rem'],
  alignItems: 'center',
  justifyContent: ['center', 'center', 'center', 'flex-end'],
  height: 'fit-content',
  paddingTop: ['2rem', '2rem', '2rem', '4rem'],
}

const imageStyle: ThemeUIStyleObject = {
  height: 'auto',
  maxHeight: '80%',
  maxWidth: '80%',
  boxShadow: '0 0 32px rgba(0, 0, 0, 0.125)',
}

const PreOrderArt: FC = () => (
  <Flex sx={containerStyle}>
    <Image
      sx={imageStyle}
      src="/ddq.png"
      alt="Arte da capa do livro 'Daqui do quarto', de Robson Junior."
    />
  </Flex>
)

const menuStyle: ThemeUIStyleObject = {
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
  marginTop: '1rem',
}

const descriptionContainerStyle: ThemeUIStyleObject = {
  marginX: ['1rem', '1rem', '12.5%'],
  padding: '1rem',
  gap: '1.5rem',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
}

const DDQSection: FC = () => (
  <Grid variant="section">
    <PreOrderArt />
    <Flex sx={descriptionContainerStyle}>
      <Text variant="sectionSubtitle">Um segundo livro de poesia</Text>
      <Text variant="sectionTitle">Daqui do quarto</Text>
      <Flex sx={menuStyle}>
        <Link
          newTab
          href="https://editoraurutau.com/titulo/daqui-do-quarto"
          variant="button"
        >
          Comprar
        </Link>
        <Link
          newTab
          href="https://www.skoob.com.br/daqui-do-quarto-122240598ed122246815.html"
          variant="button"
        >
          Skoob
        </Link>
      </Flex>
    </Flex>
  </Grid>
)

export default DDQSection
