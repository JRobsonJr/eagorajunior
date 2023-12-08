import { Grid, Flex, Image, Text } from 'theme-ui'

import type { FC } from 'react'
import type { ThemeUIStyleObject } from 'theme-ui'

import Link from './Link'

const containerStyle: ThemeUIStyleObject = {
  padding: ['1rem'],
  alignItems: 'center',
  justifyContent: 'center',
  height: 'fit-content',
  paddingTop: ['2rem', '2rem', '2rem', '4rem'],
}

const imageStyle: ThemeUIStyleObject = {
  height: 'auto',
  maxHeight: '80%',
  maxWidth: '80%',
  boxShadow: '0 0 32px rgba(0, 0, 0, 0.125)',
}

interface CoverArtProps {
  src: string
  title: string
}

const CoverArt: FC<CoverArtProps> = ({ src, title }) => (
  <Flex sx={containerStyle}>
    <Image
      sx={imageStyle}
      src={src}
      alt={`Arte da capa do livro ${title}, de Robson Junior.`}
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

interface BookDetailsProps {
  title: string
  coverArt: string
  publisher: string
  year: number
  skoobUrl: string
  purchaseUrl?: string
}

const BookDetails: FC<BookDetailsProps> = ({
  title,
  coverArt,
  publisher,
  year,
  skoobUrl,
  purchaseUrl,
}) => (
  <Grid variant="bookSection">
    <CoverArt src={coverArt} title={title} />
    <Flex sx={descriptionContainerStyle}>
      <Text variant="sectionSubtitle">
        {publisher}, [{year}]
      </Text>
      <Text variant="bookTitle" sx={{ fontSize: '2rem' }}>
        {title}
      </Text>
      <Flex sx={menuStyle}>
        {purchaseUrl && (
          <Link newTab href={purchaseUrl} variant="button">
            Comprar
          </Link>
        )}
        <Link newTab href={skoobUrl} variant="button">
          Skoob
        </Link>
      </Flex>
    </Flex>
  </Grid>
)

const BooksSection: FC = () => (
  <Grid
    sx={{
      gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr 1fr'],
    }}
  >
    <BookDetails
      title="Para estreitar os tatos"
      coverArt="/tatos.png"
      publisher="Editora Urutau"
      year={2023}
      skoobUrl="https://www.skoob.com.br/para-estreitar-os-tatos-122397291ed122398576.html"
    />
    <BookDetails
      title="Daqui do quarto"
      coverArt="/ddq.png"
      publisher="Editora Urutau"
      year={2022}
      purchaseUrl="https://editoraurutau.com/titulo/daqui-do-quarto"
      skoobUrl="https://www.skoob.com.br/daqui-do-quarto-122240598ed122246815.html"
    />
    <BookDetails
      title="Eu diante de antieu"
      coverArt="/edda.jpg"
      publisher="Editora Folheando"
      year={2022}
      purchaseUrl="https://www.editorafolheando.com.br/pd-9014d5-eu-diante-de-antieu.html"
      skoobUrl="https://www.skoob.com.br/eu-diante-de-antieu-12214398ed12195511.html"
    />
  </Grid>
)

export default BooksSection
