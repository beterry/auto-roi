import React, {useState} from 'react'

//import components
import Layout from '../Layout/Layout.component'
import Header from '../Header/Header.component'
import Intro from '../Intro/Intro.component'
import Instructions from '../Instructions/Instructions.component'
import Arrows from '../Arrows/Arrows.component'
import LifetimeValue from '../LifetimeValue/LifetimeValue.component'
import Referrals from '../Referrals/Referrals.component'
import TotalLifetime from '../TotalLifetime/TotalLifetime.component'
import ShortTerm from '../ShortTerm/ShortTerm.component'

//import styles
import styles from './App.module.css'

function App() {

  //declare state
  //variables that the user is able to update
  const [aro, setAro] = useState(573)
  const [visits, setVisits] = useState(2)
  const [years, setYears] = useState(5)
  const [referrals, setReferrals] = useState(2)
  const [quantity, setQuantity] = useState(10000)
  const [redemptionRate, setRedemptionRate] = useState(0.005)

  //cost of mailer
  const cost = 3500

  //define functions to update state
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
  const changeQuantity = (newValue) => {
    console.log(newValue)
    setQuantity(newValue)
  }
  const changeRedemptionRate = (newValue) => {
    console.log(newValue)
    setRedemptionRate(newValue)
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
      <TotalLifetime
        aro={aro}
        visits={visits}
        years={years}
        referrals={referrals}
      />
      <ShortTerm
      aro={aro}
        quantity={quantity}
        redemptionRate={redemptionRate}
        onChangeQuantity={changeQuantity}
        onChangeRedemptionRate={changeRedemptionRate}
        cost={cost}
      />
    </Layout>
  )
}

export default App
