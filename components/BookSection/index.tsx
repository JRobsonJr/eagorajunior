import { Grid } from 'theme-ui'

import type { FC } from 'react'
import type { ThemeUIStyleObject } from 'theme-ui'

import BookCover from './BookCover'
import BookDetails from './BookDetails'

const gridStyle: ThemeUIStyleObject = {
  backgroundImage: `url(./bgt.png)`,
  backgroundSize: '20rem',
}

const BookSection: FC = () => (
  <Grid variant="section" sx={gridStyle}>
    <BookCover />
    <BookDetails />
  </Grid>
)

export default BookSection
