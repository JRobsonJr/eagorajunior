import { Flex, NavLink } from 'theme-ui'

import type { FC } from 'react'
import type { ThemeUIStyleObject } from 'theme-ui'

const Navbar: FC = () => (
  <Flex
    as="nav"
    sx={{
      backgroundColor: 'black',
      flexDirection: 'row',
      height: '3rem',
      color: 'white',
      textTransform: 'lowercase',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      fontStyle: 'italic',
      fontFamily: 'Bebas Neue',
      letterSpacing: '.1rem',
      position: 'fixed',
      width: '100%',
      zIndex: 1000,
    }}
  >
    <NavLink href="/">Início</NavLink>
    <NavLink href="/#newsletter">Newsletter</NavLink>
    <NavLink href="/#sobre">Sobre</NavLink>
  </Flex>
)

export default Navbar
