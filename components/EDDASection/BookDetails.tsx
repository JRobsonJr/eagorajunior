import { Flex, Text } from 'theme-ui'

import type { ThemeUIStyleObject } from 'theme-ui'

import BookTitle from './BookTitle'
import Link from '../Link'

const containerStyle: ThemeUIStyleObject = {
  marginX: ['1rem', '1rem', '12.5%'],
  padding: '1rem',
  gap: '1.5rem',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
}

const menuStyle: ThemeUIStyleObject = {
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
  marginTop: '1rem',
}

const BookDetails = () => (
  <Flex sx={containerStyle}>
    <Text variant="sectionSubtitle">Um primeiro livro de poesia</Text>
    <BookTitle />
    <Flex sx={menuStyle}>
      <Link
        newTab
        href="https://www.editorafolheando.com.br/pd-9014d5-eu-diante-de-antieu.html"
        variant="button"
      >
        Comprar
      </Link>
      <Link
        newTab
        href="https://www.skoob.com.br/livro/12214398ED12195511"
        variant="button"
      >
        Skoob
      </Link>
    </Flex>
  </Flex>
)

export default BookDetails
