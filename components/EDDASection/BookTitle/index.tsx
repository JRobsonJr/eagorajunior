import { keyframes } from '@emotion/react'
import { Flex, Text } from 'theme-ui'
import { VisuallyHidden } from 'reakit'

import type { ThemeUIStyleObject } from 'theme-ui'

import AnimatedLetter from './AnimatedLetter'

const revealAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const containerStyle: ThemeUIStyleObject = {
  flexDirection: 'column',
  textAlign: 'center',
  fontFamily: 'Bebas Neue',
  userSelect: 'none',
  lineHeight: 1,
  fontSize: ['4rem', '8rem'],
  marginBottom: ['4rem', '8rem'],
}

const staticTextStyle: ThemeUIStyleObject = {
  whiteSpace: 'nowrap',
  textAlign: 'center',
  animation: `${revealAnimation} 2s ease-in-out`,
}

const letterContainerStyle: ThemeUIStyleObject = {
  position: 'absolute',
}

const letterMapping = [
  { distance: 9.2, letter: 'E' },
  { distance: 9.2, letter: 'U' },
  { distance: 0, letter: ' ' },
  { distance: -3, letter: 'D' },
  { distance: 3.8, letter: 'I' },
  { distance: -1.8, letter: 'A' },
  { distance: -1.8, letter: 'N' },
  { distance: -1.8, letter: 'T' },
  { distance: -8.5, letter: 'E' },
]

const Title = () => (
  <>
    <VisuallyHidden>
      <Text>Eu diante de antieu</Text>
    </VisuallyHidden>
    <Flex aria-hidden key={Math.random()} sx={containerStyle}>
      <Text sx={staticTextStyle}>Eu diante</Text>
      <Flex sx={letterContainerStyle}>
        {letterMapping.map(({ distance, letter }, index) => (
          <AnimatedLetter key={index} distance={distance}>
            {letter}
          </AnimatedLetter>
        ))}
      </Flex>
    </Flex>
  </>
)

export default Title
