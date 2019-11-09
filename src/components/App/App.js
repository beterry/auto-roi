import React, {useState} from 'react'

//import components
import Layout from '../Layout/Layout.component'
import Header from '../Header/Header.component'
import Intro from '../Intro/Intro.component'
import Instructions from '../Instructions/Instructions.component'
import Arrows from '../Arrows/Arrows.component'
import LifetimeValue from '../LifetimeValue/LifetimeValue.component'

//import styles
import styles from './App.module.css'

function App() {
  const [lifetimeValue, setLifetimeValue] = useState({
    aro: 573,
    visits: 2,
    years: 5,
  })
  return (
    <Layout>
      <Header />
      <Intro />
      <Instructions />
      <Arrows />
      <LifetimeValue />
    </Layout>
  )
}

export default App
