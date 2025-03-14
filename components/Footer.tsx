import { Flex, Image, Text } from 'theme-ui'

import type { FC } from 'react'
import type { ThemeUIStyleObject } from 'theme-ui'

const footerStyle: ThemeUIStyleObject = {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '1rem',
    paddingBottom: ['2rem', '2rem', '4rem'],
    height: '100%',
    flexDirection: 'column',
}

const Footer: FC = () => (
    <Flex sx={footerStyle}>
        <Text sx={{ fontSize: '.75rem' }}>2025, Robson Junior</Text>
        <Image
            src="/logo_transparent.png"
            alt="Logo do site, com o autor desenhado."
            sx={{ maxHeight: '6rem' }}
        />
    </Flex>
)

export default Footer
