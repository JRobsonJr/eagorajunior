import { Flex, Image } from 'theme-ui'

import type { FC } from 'react'
import type { ThemeUIStyleObject } from 'theme-ui'

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

const BookCover: FC = () => (
  <Flex sx={containerStyle}>
    <Image
      sx={imageStyle}
      src="/edda.jpg"
      alt="Capa do livro 'Eu diante de antieu', de Robson Junior."
    />
  </Flex>
)

export default BookCover
