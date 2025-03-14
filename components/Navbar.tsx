import { Flex, NavLink, Image, Box } from 'theme-ui'

import type { FC } from 'react'
import type { ThemeUIStyleObject } from 'theme-ui'

const navbarStyle: ThemeUIStyleObject = {
  backgroundColor: 'black',
  height: '6rem',
  color: 'white',
  alignItems: 'center',
  justifyContent: ['center', 'center', 'space-between'],
  fontFamily: '"Inter", serif',
  position: 'fixed',
  width: '100%',
  zIndex: 1000,
  paddingX: '2rem',
  borderBottom: '1px solid white',
}

const Navbar: FC = () => (
  <Flex as="nav" sx={navbarStyle}>
    <Flex sx={{ fontSize: '2rem' }}>
      <NavLink href="/" sx={{ display: 'flex' }}>
        <Image
          src="/rj.png"
          alt="Logo textual do site com o nome do autor."
          sx={{ maxHeight: '4rem' }}
        />
      </NavLink>
    </Flex>
    <Box sx={{ gap: '2rem', display: ['none', 'none', 'flex'] }}>
      <NavLink href="/#sobre">o autor</NavLink>
      <NavLink href="/#livros">as obras</NavLink>
      <NavLink href="/#loja">a lojinha</NavLink>
      <NavLink href="/#newsletter">a newsletter</NavLink>
    </Box>
  </Flex>
)

export default Navbar
