import React from 'react'

//import components
import Layout from '../Layout/Layout.component'
import Header from '../Header/Header.component'
import Intro from '../Intro/Intro.component'
import Instructions from '../Instructions/Instructions.component'
import Arrows from '../Arrows/Arrows.component'

//import styles
import styles from './App.module.css'

function App() {
  return (
    <Layout>
      <Header />
      <Intro />
      <Instructions />
      <Arrows />
    </Layout>
  )
}

export default App
