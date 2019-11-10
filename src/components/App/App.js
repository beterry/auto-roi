import React, {useState} from 'react'

//import components
import Layout from '../Layout/Layout.component'
import Header from '../Header/Header.component'
import Intro from '../Intro/Intro.component'
import Instructions from '../Instructions/Instructions.component'
import Arrows from '../Arrows/Arrows.component'
import LifetimeValue from '../LifetimeValue/LifetimeValue.component'
import Referrals from '../Referrals/Referrals.component'

//import styles
import styles from './App.module.css'

function App() {
  const [aro, setAro] = useState(573)
  const [visits, setVisits] = useState(2)
  const [years, setYears] = useState(5)
  const [referrals, setReferrals] = useState(2)
  const changeAro = (newValue) => {
    console.log(newValue)
    setAro(newValue)
  }
  const changeVisits = (newValue) => {
    console.log(newValue)
    setVisits(newValue)
  }
  const changeYears = (newValue) => {
    console.log(newValue)
    setYears(newValue)
  }
  const changeReferrals = (newValue) => {
    console.log(newValue)
    setReferrals(newValue)
  }
  return (
    <Layout>
      <Header />
      <Intro />
      <Instructions />
      <Arrows />
      <LifetimeValue 
        aro={aro}
        visits={visits}
        years={years}
        onChangeAro={changeAro}
        onChangeVisits={changeVisits}  
        onChangeYears={changeYears}
      />
      <Referrals
        aro={aro}
        visits={visits}
        years={years}
        referrals={referrals}
        onChangeReferrals={changeReferrals}
      />
    </Layout>
  )
}

export default App
