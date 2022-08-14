import { Grid } from 'theme-ui'

import type { FC } from 'react'
import type { ThemeUIStyleObject } from 'theme-ui'

import BookCover from './BookCover'
import BookDetails from './BookDetails'
import RecitedPoems from './RecitedPoems'

const gridStyle: ThemeUIStyleObject = {
  backgroundImage: `url(./bgt.png)`,
  backgroundSize: '20rem',
}

const BookSection: FC = () => (
  <Grid sx={gridStyle}>
    <Grid variant="section">
      <BookCover />
      <BookDetails />
    </Grid>
    <RecitedPoems />
  </Grid>
)

export default BookSection
