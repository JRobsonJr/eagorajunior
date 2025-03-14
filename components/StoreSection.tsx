import { Flex, Text, Image, Box, Grid, Heading } from 'theme-ui'

import type { ThemeUIStyleObject } from 'theme-ui'

import Link from './Link'
import { useEffect, useState } from 'react'

const textContainerStyle: ThemeUIStyleObject = {
  gap: '1.5rem',
  alignItems: 'left',
  flexDirection: 'column',
}

const articleStyle: ThemeUIStyleObject = {
}

const menuStyle: ThemeUIStyleObject = {
  gap: '1rem',
  justifyContent: 'center',
  flexDirection: ['column', 'column', 'row'],
}

const logoImageContainer: ThemeUIStyleObject = {
  justifyContent: 'center',
  alignItems: 'flex-end',
}

const products = [
  {
    name: 'Bottons "Es.trei.tar"',
    url: 'https://umapenca.com/eagorajunior/bottons/estreitar-171872.html',
    imageSrc: '/bottom_estreitar.png'
  },
  {
    name: 'Ecobag "A muitas mãos"',
    url: 'https://umapenca.com/eagorajunior/ecobag/a-muitas-maos-151847.html',
    imageSrc: '/ecobag_maos.png'
  },
  {
    name: 'Camiseta "Tatos"',
    url: 'https://umapenca.com/eagorajunior/camiseta/tatos-polaroid-170813.html',
    imageSrc: '/camiseta_tatos.png'
  },
  {
    name: 'Ecobag "Es.trei.tar"',
    url: 'https://umapenca.com/eagorajunior/ecobag/estreitar-151844.html',
    imageSrc: '/ecobag_estreitar.png'
  },
  {
    name: 'Camiseta "A muitas mãos"',
    url: 'https://umapenca.com/eagorajunior/camiseta/a-muitas-maos-170815.html',
    imageSrc: '/camiseta_maos.png'
  },
  {
    name: 'Ecobag "Tatos"',
    url: 'https://umapenca.com/eagorajunior/ecobag/tatos-153488.html',
    imageSrc: '/ecobag_tatos.png'
  },
  {
    name: 'Camiseta "Es.trei.tar"',
    url: 'https://umapenca.com/eagorajunior/camiseta/estreitar-171868.html',
    imageSrc: '/camiseta_estreitar.png'
  },
]

const StoreSection = () => {
  const [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProductIndex(index => (index + 1) % products.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const { name: productName, imageSrc: productImageSrc } = products[productIndex];

  return (
    <Grid id="loja" variant="section" sx={{
      gridTemplateColumns: ['1fr', '1fr', '1fr 1fr', '2fr 1fr'],
    }}>
      <Flex sx={textContainerStyle}>
        <Heading variant="sectionTitle">A lojinha</Heading>
        <Box sx={articleStyle}>
          <Text sx={{ fontSize: ['1.5rem', '1.5rem', '2rem'], mark: {
            backgroundColor: 'primary',
            color: 'white',
          },
          i: {
            color: 'primary'
          } }}>
            A coleção <i>Tatos</i> tem <mark>camisetas</mark>, <mark>ecobags</mark>, <mark>ímãs</mark> e <mark>bottons</mark> com
            estampas inspiradas pelo meu terceiro livro de poesia, <i>Para estreitar os tatos</i>. Confere lá!
          </Text>
        </Box>
        <Flex sx={menuStyle}>
          <Link
            href="https://umapenca.com/eagorajunior"
            variant="button"
            newTab
          >
            Acessar
          </Link>
        </Flex>
      </Flex>
      <Flex sx={logoImageContainer}>
        <Image
          src={productImageSrc}
          alt={productName}
          sx={{
            maxWidth: ['100%'],
            borderRadius: '.5rem',
            borderWidth: ['.5rem', '1rem'], borderStyle: 'solid', borderColor: 'primary',
          }}
        />
      </Flex>
    </Grid>
  )
}

export default StoreSection
