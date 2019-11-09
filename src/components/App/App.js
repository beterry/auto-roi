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
  const [aro, setAro] = useState(573)
  const changeAro = (newValue) => {
    console.log(newValue)
    setAro(newValue)
  }
  return (
    <Layout>
      <Header />
      <Intro />
      <Instructions />
      <Arrows />
      <LifetimeValue 
        aro={aro}
        onChangeAro={changeAro}  
      />
    </Layout>
  )
}

export default App
