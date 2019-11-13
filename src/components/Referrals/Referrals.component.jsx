import React from 'react'

//import styles

//import components
import Step from '../Step/Step.component'
import Left from '../Left/Left.component'
import Calculation from '../Calculation/Calculation.component'
import Right from '../Right/Right.component'
import Slider from '../Slider/Slider.component'
import Total from '../Total/Total.component'

//import images
import small from '../../images/illustrations/testimonials-small-whole.svg'
import medium from '../../images/illustrations/testimonials-medium-whole.svg'
import large from '../../images/illustrations/testimonials-large-whole.svg'

//improt numeral
import numeral from 'numeral'

export default ({color, aro, visits, years, referrals, onChangeReferrals}) => {
    //determine what illustration to display
    let illustration
    if (referrals == 0){
        illustration = undefined
    } else if (referrals == 1){
        illustration = small
    } else if (referrals == 2){
        illustration = medium
    }else {
        illustration = large
    }

    let total = aro * visits * years * referrals
    let formatTotal = numeral(total).format('$0,0')

    return(
        <Step>
            <Left
                title={'STEP 2 OF 3'}
                color={color}
                show={['Every quality auto repair shop receives referrals from their happy customers. As a matter of fact, referrals remain the primary lead source for many of the top shops in the country.']}
                hidden={[
                    'Therefore, we must determine the average number of referrals you receive from each of your new customers. These referrals can be other family members, friends, neighbors or colleagues’ vehicles.',
                    'Fill in whatever number of referrals is true to your shop. But don’t skip this step! Revenue generated from referrals must be part of the value of that new customer. The fact is, you would have never received that referral without the initial direct mail that attracted that new customer who referred them to your shop.'
                ]}
            >
            </Left>
            <Calculation
                color={color}
                title={'REVENUE FROM NEW CUSTOMER REFERRALS'}
                tip={[
                    'Value of One of Your Customers',
                    'multiplied by (x)',
                    'Average Number of Referrals Made By One Customer',
                    'equals (=)',
                    'Revenue from Referrals'
                ]}
            >
                <Slider
                    color={'#69B8EB'}
                    title={'Total Lifetime Value of One Customer'}
                    total={numeral(aro * visits * years).format('$0,0')}
                    tip={[
                        'Calculated in Step 1',
                        'Yearly Value of Each Customer',
                        'multiplied by (x)',
                        'Average Number of Years You Keep a Customer'
                    ]}
                />
                <Slider
                    color={color}
                    title={'Average Number of Referrals Made By One Customer'}
                    total={referrals}
                    options={[0, 1, 2, 5, 10]}
                    onChange={onChangeReferrals}
                    tip={[
                        'On average, how many customers do you obtain from a happy customer’s recommendation?'
                    ]}
                />
                <Total
                    color={color}
                    equation={`$${aro * visits * years} x ${referrals} =`}
                    total={formatTotal}
                    tip={[
                        'Value of One Customer',
                        'multiplied by (x)',
                        'Average Number of Referrals Received by One Customer'
                    ]}
                />
            </Calculation>
            <Right
                src={illustration}
                alt={'People talking amongst eachother'}
            />
        </Step>
)}