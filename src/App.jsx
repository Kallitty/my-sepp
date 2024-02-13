import React from 'react'

// import Exam from './Exam'
import { Article, Brand, CTA, Feature, Navbar } from './components'

import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  Whatsepp,
} from './containers'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatsepp />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
