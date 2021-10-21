import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Skills } from 'components/Skills'
import { Projects } from 'components/Projects'
import { Intro } from 'components/Intro'
import { Blogs } from 'components/Blogs'
import { HighlightButton } from 'common/HighlightButton'
import { Menu } from 'common/Menu'



const Meny = styled.section`
  display: flex;
  justify-content: center;
  margin: 4em;
  > * {
    text-decoration: none;
  }
`

export const App = (fontSize) => {

  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Meny>
          <NavLink to={`/`}  activeStyle={{
            textDecoration: 'underline'
            }} exact><HighlightButton primary page='me'></HighlightButton></NavLink>
          <NavLink to={`/ux`}  activeStyle={{
            textDecoration: 'underline'
            }} exact><HighlightButton page='ux'></HighlightButton></NavLink>
          <NavLink to={`/code`}  activeStyle={{
            textDecoration: 'underline'
            }} exact><HighlightButton page='code'></HighlightButton></NavLink> 
        </Meny>
        <Switch>
          <Route path='/' exact>
            <Intro />
            <Skills />
            <Blogs />
          </Route>
          <Route path='/ux' exact>
            <Menu />
          </Route>
          <Route path='/code' exact>
            <Projects />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}