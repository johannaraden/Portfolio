import React from 'react'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Links } from 'components/Links'
import { Tech } from 'components/Tech'
import { Skills } from 'components/Skills'
import { Projects } from 'components/Projects'

export const App = () => {
  return (
    <div>
      <Header />
      <Tech />
      <Skills />
      <Projects />
      <Links />
      <Footer />
    </div>
  )
}
