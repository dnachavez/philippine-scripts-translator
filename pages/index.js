import Head from 'next/head'
import NavigationHeader from '@/components/NavigationHeader'
import Translator from '@/components/Translator'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <meta property='og:title' content='Philippine Scripts Translator'></meta>
        <meta property='og:type' content='website'></meta>
        <meta property='og:image' content='/assets/images/share-card.jpg'></meta>
        <meta property='og:image:alt' content='Philippine Scripts Translator'></meta>
        <meta property='og:url' content='https://dnachavez.ph/philippine-scripts-translator'></meta>
        <meta property='og:description' content='Philippine Scripts Translator is a tool for translating Filipino texts into ancient Philippine scripts.'></meta>
        <meta name='twitter:title' content='Philippine Scripts Translator'></meta>
        <meta name='twitter:description' content='Philippine Scripts Translator is a tool for translating Filipino texts into ancient Philippine scripts.'></meta>
        <meta name='twitter:image' content='/assets/images/share-card.jpg'></meta>
        <meta name='twitter:card' content='summary_large_image'></meta>
        <title>Philippine Scripts Translator</title>
        <meta name='description' content='Philippine Scripts Translator is a tool for translating Filipino texts into ancient Philippine scripts.'></meta>
        <link rel='apple-touch-icon' sizes='180x180' href='/assets/images/favicon/apple-touch-icon.png'></link>
        <link rel='shortcut icon' sizes='32x32' href='/assets/images/favicon/favicon-32x32.png'></link>
        <link rel='shortcut icon' sizes='16x16' href='/assets/images/favicon/favicon-16x16.png'></link>
        <link rel='shortcut icon' href='/assets/images/favicon/favicon.ico'></link>
        <link rel='manifest' href='/assets/images/favicon/site.webmanifest'></link>
        <link rel='mask-icon' href='/assets/images/favicon/safari-pinned-tab.svg'></link>
        <meta name='msapplication-TileColor' content='#2f283f'></meta>
        <meta name='msapplication-config' content='/assets/images/favicon/browserconfig.xml'></meta>
        <meta name='theme-color' content='#2f283f'></meta>
      </Head>
      <div className='flex-row'>
        <NavigationHeader></NavigationHeader>
        <Translator></Translator>
        <Footer></Footer>
      </div>
    </>
  )
}