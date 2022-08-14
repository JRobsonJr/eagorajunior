import { Box, Grid, Image, Text } from 'theme-ui'

import Link from '../Link'

const RecitedPoems = () => (
  <Box sx={{ padding: ['1.5rem', '2rem', '2.5rem'] }}>
    <Text variant="sectionTitle">Poemas recitados</Text>

    <Grid gap={['.5rem', '1rem']} columns={[1, 3]} paddingTop="1rem">
      <Link
        href="https://www.instagram.com/reel/CgAfOklgSeG/"
        variant="photo"
        newTab
      >
        <Image
          src="/apdptuqdp.png"
          alt="Recitando o poema 'A preguiça do poeta tem um quê de poesia'."
        />
      </Link>
      <Link
        href="https://www.instagram.com/reel/CgnhY62KZJh/"
        variant="photo"
        newTab
      >
        <Image src="/cupido.png" alt="Recitando o poema 'Cupido'." />
      </Link>
      <Link
        href="https://www.instagram.com/reel/Cg2kzjSouR-/"
        variant="photo"
        newTab
      >
        <Image src="/recomeço.png" alt="Recitando o poema 'Recomeço'." />
      </Link>
    </Grid>
  </Box>
)

export default RecitedPoems
