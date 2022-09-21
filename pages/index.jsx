import Head from 'next/head'
import Hero from './components/Hero'
import Instegram from './components/Instegram'
import Slider from './components/Slider'
import { sliderData } from '../api/sliderData'

import Categery from './components/Categery'

export default function Home() {
  return (
    <div >
      <Head>
        <title>photography Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200&family=DynaPuff:wght@400;500&family=Raleway:ital,wght@0,100;0,300;0,400;1,100&family=Silkscreen&display=swap" rel="stylesheet</link>" />
      </Head>
      {/* components */}
      <Hero 
      heading='Capture Photogtaphy'
      message='I capture moment in nature and keep then alive.'
      />
      <Slider slides={sliderData} />
     <Instegram />
     <Categery />
    </div>
  )
}
