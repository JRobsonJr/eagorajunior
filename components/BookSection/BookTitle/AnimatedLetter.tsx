import { keyframes } from '@emotion/react'
import { Text } from 'theme-ui'

import type { FC } from 'react'
import type { ThemeUIStyleObject } from 'theme-ui'

const anagramAnimation = (left: number, fontSize: number) => keyframes`
  0% {
    left: 0;
    top: 0;
  }
  50% {
    top: ${fontSize}rem;
  }
  100% {
    opacity: 1;
    left: ${left}rem;
    top: ${fontSize}rem;
  }
`

const letterStyle: ThemeUIStyleObject = {
  position: 'relative',
  opacity: 0,
  animationTimingFunction: 'ease-in-out',
  animationFillMode: 'forwards',
  animationDuration: '4s',
}

interface Props {
  distance: number
}

const AnimatedLetter: FC<Props> = ({ children, distance }) => (
  <Text
    sx={{
      animationName: [
        `${anagramAnimation(distance, 4)}`,
        `${anagramAnimation(2 * distance, 8)}`,
      ],
      ...letterStyle,
    }}
  >
    {children}
  </Text>
)

export default AnimatedLetter
