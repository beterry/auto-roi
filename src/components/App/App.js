import React, {useState} from 'react'

//import components
import Layout from '../Layout/Layout.component'
import Screen from '../Screen/Screen.component'
import Header from '../Header/Header.component'
import Intro from '../Intro/Intro.component'
import Instructions from '../Instructions/Instructions.component'
import Arrows from '../Arrows/Arrows.component'
import LifetimeValue from '../LifetimeValue/LifetimeValue.component'
import Referrals from '../Referrals/Referrals.component'
import TotalLifetime from '../TotalLifetime/TotalLifetime.component'
import ShortTerm from '../ShortTerm/ShortTerm.component'
import LongTerm from '../LongTerm/LongTerm.component'
import MoneyBank from '../MoneyBank/MoneyBank.component'
import Footer from '../Footer/Footer.component'
import Part from '../Part/Part.component'
import Padding from '../Padding/Padding.component'

// import styles
// import styles from './App.module.css'

function App() {

  //declare state
  //variables that the user is able to update
  const [aro, setAro] = useState(573)
  const [visits, setVisits] = useState(2)
  const [years, setYears] = useState(5)
  const [referrals, setReferrals] = useState(2)
  const [quantity, setQuantity] = useState(10000)
  const [redemptionRate, setRedemptionRate] = useState(0.005)
  const [retention, setRetention] = useState(0.8)
  const [profitMargin, setProfitMargin] = useState(0.5)

  //variable for showing calculator after input
  const [showCalc, setShowCalc] = useState(false)

  const activateCalc = (shop) => {
    if (shop === 'general'){
      setShowCalc('general')
    }
    if (shop === 'specialty'){
      setShowCalc('specialty')
    }
  }

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
  const changeRetention = (newValue) => {
    console.log(newValue)
    setRetention(newValue)
  }
  const changeProfitMargin = (newValue) => {
    console.log(newValue)
    setProfitMargin(newValue)
  }

  //theme state
  //true = light
  //false = dark
  const [theme, setTheme] = useState(true)
  const changeTheme = () => {
    setTheme(!theme)
  }

  return (
    <Layout theme={theme}>
      <Screen>
        <Header changeTheme={changeTheme} theme={theme}/>
        <Intro theme={theme}/>
        <Instructions
          activateCalc={activateCalc}
          theme={theme}
          showCalc={showCalc}
        />
        {showCalc ? <Arrows /> : <Padding />}
      </Screen>
      {showCalc ?
        <>
        <Padding />
          <Part 
            partNumber={1}
            title={'Determine Value Of Your Customers'}
            theme={theme}
          />
          <Padding />
          <Arrows />
          <Padding />
          <LifetimeValue
            color={'#69B8EB'}
            aro={aro}
            visits={visits}
            years={years}
            onChangeAro={changeAro}
            onChangeVisits={changeVisits}  
            onChangeYears={changeYears}
            theme={theme}
          />
          <Padding />
          <Arrows />
          <Padding />
          <Referrals
            color={'#00C25F'}
            aro={aro}
            visits={visits}
            years={years}
            referrals={referrals}
            onChangeReferrals={changeReferrals}
            theme={theme}
          />
          <Padding />
          <Arrows />
          <Padding />
          <TotalLifetime
            color={'#9055A2'}
            aro={aro}
            visits={visits}
            years={years}
            referrals={referrals}
            theme={theme}
          />
          <Padding />
          <Arrows />
          <Padding />
          <Part 
            partNumber={2}
            title={'Short-Term & Long-Term Return On Investment'}
            theme={theme}
          />
          <Padding />
          <Arrows />
          <Padding />
          <ShortTerm
            color={'#FF8C00'}
            aro={aro}
            quantity={quantity}
            redemptionRate={redemptionRate}
            onChangeQuantity={changeQuantity}
            onChangeRedemptionRate={changeRedemptionRate}
            cost={cost}
            theme={theme}
          />
          <Padding />
          <Arrows />
          <Padding />
          <LongTerm
            color={'#1594E0'}
            aro={aro}
            visits={visits}
            years={years}
            referrals={referrals}
            quantity={quantity}
            redemptionRate={redemptionRate}
            cost={cost}
            retention={retention}
            onChangeRetention={changeRetention}
            theme={theme}
          />
          <Padding />
          <Arrows />
          <Padding />
          <MoneyBank
            color={'#F26536'}
            aro={aro}
            visits={visits}
            years={years}
            referrals={referrals}
            quantity={quantity}
            redemptionRate={redemptionRate}
            cost={cost}
            retention={retention}
            profitMargin={profitMargin}
            onChangeProfitMargin={changeProfitMargin}
            theme={theme}
          />
          <Padding />
          <Footer theme={theme}/>
          <Padding />
        </>:
      null
      }
      </Layout>
  )
}

export default App