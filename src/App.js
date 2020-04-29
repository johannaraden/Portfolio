import React from 'react'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Headline } from 'common/Headline'
import { Tech } from 'components/Tech'
import { Skills } from 'components/Skills'

export const App = () => {
  return (
    <div>
      <Header />
      <Tech />
      <Headline />
      <Skills />
      <Footer />
    </div>
  )
}
