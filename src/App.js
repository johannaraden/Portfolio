import React from 'react'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Links } from 'components/Links'
import { Tech } from 'components/Tech'
import { Skills } from 'components/Skills'
import { Projects } from 'components/Projects'
import { More } from 'components/More'
import { Intro } from 'components/Intro'


export const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Tech />
      <Projects />
      <More />
      <Skills />
      <Links />
      <Footer />
    </>
  )
}
