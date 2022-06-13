import Head from 'next/head'

import type { FC } from 'react'

const URL_PREFIX = 'https://www.eagorajunior.com.br'

interface Props {
  title: string
  description: string
  image?: string
  url?: string
}

const Meta: FC<Props> = ({
  title,
  description,
  image = `${URL_PREFIX}/eaj.png`,
  children,
}) => {
  const siteName = 'E agora, Junior?'
  const customTitle = `${title} – ${siteName}`

  return (
    <Head>
      <meta key="og_locale" property="og:locale" content="en_US" />
      <meta key="og_type" property="og:type" content="website" />
      <meta key="og_site" property="og:site_name" content={siteName} />
      <title key="title">{customTitle}</title>
      <meta key="og_title" property="og:title" content={customTitle} />
      <meta key="tw_title" name="twitter:title" content={customTitle} />
      {description && (
        <>
          <meta key="desc" name="description" content={description} />
          <meta key="og_desc" property="og:description" content={description} />
          <meta
            key="tw_desc"
            name="twitter:description"
            content={description}
          />
        </>
      )}
      {image && (
        <>
          <meta key="og_img" property="og:image" content={image} />
          <meta
            key="tw_card"
            name="twitter:card"
            content="summary_large_image"
          />
          <meta key="tw_img" name="twitter:image" content={image} />
        </>
      )}
      <meta key="theme_color" name="theme-color" content="crimson" />
      <meta key="tile_color" name="msapplication-TileColor" content="crimson" />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  )
}

export default Meta
