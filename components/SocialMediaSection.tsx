import { Flex, Text, Grid, Embed, Heading } from 'theme-ui'

import type { ThemeUIStyleObject } from 'theme-ui'

const textContainerStyle: ThemeUIStyleObject = {
  gap: '1.5rem',
  alignItems: 'flex-start',
  flexDirection: 'column',
}

const SocialMediaSection = () => (
  <Grid variant="fullWidthSection" id="newsletter">
    <Flex sx={textContainerStyle}>
      <Heading variant="sectionTitle">A newsletter</Heading>

      <Flex sx={{ padding: '0rem', width: '100%', borderWidth: ['.5rem', '1rem'], borderStyle: 'solid', borderColor: 'primary', borderRadius: '.5rem' }}>
      <iframe src="https://eagorajunior.substack.com/embed" width="100%" height="400" style={{ border: "1px solid #EEE", background: "black" }} frameBorder="0"></iframe>
      </Flex>
    </Flex>
  </Grid>
)

export default SocialMediaSection
