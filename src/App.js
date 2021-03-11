import React from 'react'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Clients } from 'components/Clients'
import { Links } from 'components/Links'
import { Skills } from 'components/Skills'
import { Projects } from 'components/Projects'
import { More } from 'components/More'
import { Intro } from 'components/Intro'
import { Blogs } from 'components/Blogs'
import { ImageCircle } from 'components/ImageCircle'


export const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <ImageCircle />
      <Projects />
      <Clients/>
      <More />
      <Skills />
      <Blogs />
      {/* <Links /> */}
      <Footer />
    </>
  )
}
