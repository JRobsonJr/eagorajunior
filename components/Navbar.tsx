import { Flex, NavLink } from 'theme-ui'

import type { FC } from 'react'
import type { ThemeUIStyleObject } from 'theme-ui'

const navbarStyle: ThemeUIStyleObject = {
  backgroundColor: 'black',
  height: '3rem',
  color: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  fontStyle: 'italic',
  fontFamily: 'Bebas Neue',
  letterSpacing: '.1rem',
  position: 'fixed',
  width: '100%',
  zIndex: 1000,
}

const Navbar: FC = () => (
  <Flex as="nav" sx={navbarStyle}>
    <NavLink href="/">Início</NavLink>
    <NavLink href="/#newsletter">Newsletter</NavLink>
    <NavLink href="/#sobre">Sobre</NavLink>
  </Flex>
)

export default Navbar
