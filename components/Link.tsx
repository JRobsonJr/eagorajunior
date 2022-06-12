import NextLink from 'next/link'
import { Link as ThemeUILink } from 'theme-ui'

import type { FC } from 'react'

interface Props {
  href: string
  variant: string
  newTab?: boolean
  ariaLabel?: string
}

const Link: FC<Props> = ({ href, variant, newTab, children, ariaLabel }) => (
  <NextLink passHref href={href}>
    <ThemeUILink
      variant={variant}
      target={newTab ? '_blank' : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </ThemeUILink>
  </NextLink>
)

export default Link
