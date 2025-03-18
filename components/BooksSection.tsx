import { Grid, Flex, Image, Text, Box, Heading } from 'theme-ui'

import { useState, type FC } from 'react'
import type { ThemeUIStyleObject } from 'theme-ui'

import Link from './Link'

const menuStyle: ThemeUIStyleObject = {
  gap: '1rem',
  justifyContent: 'center',
  flexDirection: ['column', 'row', 'row', 'column', 'column', 'row'],
  width: '100%',
  alignSelf: 'center',
  justifySelf: ['flex-start', 'flex-start', 'flex-end'],
}

const descriptionContainerStyle: ThemeUIStyleObject = {
  gap: ['1rem', '1rem', '1.5rem'],
  border: '4px solid',
  borderColor: 'primary',
  borderRight: ['4px solid', '4px solid', '4px solid', 'none'],
  borderRightColor: ['primary', 'primary', 'primary', 'transparent'],
  padding: '1rem',
  transition: 'border-color 200ms linear',
  gridTemplateColumns: ['auto', 'auto', '1fr min-content'],
  width: '100%',
}

interface BookDetailsProps {
  title: string
  coverArt: string
  publisher: string
  year: number
  skoobUrl: string
  purchaseUrl?: string
  handleHover: (id: string) => void
  id: string
  isSelected: boolean
  playlistUrl: string
}

const bookDetailsStyle: ThemeUIStyleObject = {
  ':hover': { backgroundColor: 'primary' },
  transition: 'background-color 200ms linear',
}

const BookDetails: FC<BookDetailsProps> = ({
  title,
  publisher,
  year,
  skoobUrl,
  purchaseUrl,
  playlistUrl,
  handleHover,
  id,
  isSelected,
}) => (
  <Flex onMouseEnter={() => handleHover(id)} sx={{
    ...bookDetailsStyle,
    backgroundColor: isSelected ? 'primary' : '',
  }}>
    <Grid sx={descriptionContainerStyle}>
      <Flex sx={{
        flexDirection: 'column', 
        gap: '.5rem',
        alignSelf: 'center',
      }}>
        <Text variant="bookTitle">
          {title}
        </Text>
        <Text variant="sectionSubtitle" >
          {publisher}, [{year}]
        </Text>
      </Flex>
      <Flex sx={menuStyle}>
        {purchaseUrl && (
          <Link newTab href={purchaseUrl} variant={isSelected ? 'button--selected' : 'button'}>
            Comprar
          </Link>
        )}
        <Link newTab href={skoobUrl} variant={isSelected ? 'button--selected' : 'button'}>
          Skoob
        </Link>
        <Link newTab href={playlistUrl} variant={isSelected ? 'button--selected' : 'button'}>
          Playlist
        </Link>
      </Flex>
    </Grid>
  </Flex>
)

const textContainerStyle: ThemeUIStyleObject = {
  gap: '1.5rem',
  flexDirection: 'column'
}

const books = [
  {
    title: "Para estreitar os tatos",
    coverArt: "/tatos.png",
    id: '3',
    publisher: "Editora Urutau",
    year: 2023,
    purchaseUrl: 'https://editoraurutau.com/titulo/para-estreitar-os-tatos',
    skoobUrl: 'https://www.skoob.com.br/para-estreitar-os-tatos-122397291ed122398576.html',
    playlistUrl: 'https://open.spotify.com/playlist/1IYqeJW0sodsxiFaowuEF1?si=4ca7ce3e190b4831'
  },
  {
    id: "2",
    title: "Daqui do quarto",
    coverArt: "/ddq.png",
    publisher: "Editora Urutau",
    year: 2022,
    purchaseUrl: "https://editoraurutau.com/titulo/daqui-do-quarto",
    skoobUrl: "https://www.skoob.com.br/daqui-do-quarto-122240598ed122246815.html",
    playlistUrl: 'https://open.spotify.com/playlist/767pP66c83SGrwGQHtujEm?si=ab4237fcfe2c499a'
  },
  {
    id: "1",
    title: "Eu diante de antieu",
    coverArt: "/edda.jpg",
    publisher: "Editora Folheando",
    year: 2022,
    skoobUrl: "https://www.skoob.com.br/eu-diante-de-antieu-12214398ed12195511.html",
    playlistUrl: 'https://open.spotify.com/playlist/4otMSsrADFebYGG9ezTn1P?si=bbe37e8ec6c146cf'
  }
];

const BooksSection: FC = () => {
  const [selectedBookId, setSelectedBookId] = useState('3');

  const selectedBook = books.find((book) => book.id === selectedBookId);

  return (
    <Grid id="livros" variant="fullWidthSection">
      <Flex sx={textContainerStyle}>
        <Flex sx={{ flexDirection: 'column', gap: '1.5rem' }}>
          <Heading variant="sectionTitle">As obras</Heading>
          <Grid sx={{ gridTemplateColumns: ['auto', 'auto', 'auto', '1fr 1fr', '1.75fr 1fr', '3fr 1fr'], gap: 0 }}>
            <Flex
              sx={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                gap: '1rem',
                height: 'min-content'
              }}
            >
              {books.map((book) => <BookDetails key={book.id} handleHover={setSelectedBookId} isSelected={book.id === selectedBookId} {...book} />)}
            </Flex>
            <Box sx={{
              display: ['none', 'none', 'none', 'flex'],
              backgroundColor: 'primary',
              padding: '1rem',
              aspectRatio: '10 / 14',
              minHeight: '100%',
              justifyContent: 'center',
            }}>
              <Image
                src={selectedBook.coverArt}
                alt={`Arte da capa do livro ${selectedBook.title}, de Robson Junior.`}
              />
            </Box>
          </Grid>
        </Flex>
      </Flex>
    </Grid>
  )
}

export default BooksSection
