import React from 'react'

//import styles

//import components
import Step from '../Step/Step.component'
import Left from '../Left/Left.component'
import Calculation from '../Calculation/Calculation.component'
import Right from '../Right/Right.component'
import Tip from '../Tip/Tip.component'
import Slider from '../Slider/Slider.component'
import Total from '../Total/Total.component'

//import images
import small from '../../images/illustrations/money-small-whole.svg'
import medium from '../../images/illustrations/money-medium-whole.svg'
import large from '../../images/illustrations/money-large-whole.svg'

export default ({color, aro, visits, years, onChangeAro, onChangeVisits, onChangeYears}) => {
    // determine what illustration should be displayed
    let total = aro * visits * years
    let illustration
    if (total < 1800){
        illustration = small
    } else if (total >= 1800 && total < 5731){
        illustration = medium
    } else{
        illustration = large
    }

    return(
        <Step>
            <Left
                title={'STEP 1 OF 3'}
                color={color}
                show={['We start by uncovering the real value of each new customer you acquire.']}
                hidden={[
                    'It’s important you do not value your new customers solely on the amount spent on their first repair order or you will be overlooking the important, ongoing revenue from future repair orders that can only come over time.',
                    'Therefore, it’s critical we identify and assign the real value and revenue that each customer spends over the time they remain a customer at your shop AKA Lifetime Value of a Customer.'
                    ]}
            />
            <Calculation
                color={color}
                title={'TOTAL LIFETIME VALUE OF ONE CUSTOMER'}
            >
                <Slider
                    color={color}
                    title={'Average Repair Order (ARO)'}
                    total={aro}
                    options={[100, 300, 573, 750, 1000]}
                    onChange={onChangeAro}
                />
                <Slider
                    color={color}
                    title={'Number of Visits a Customer Makes Per Year'}
                    total={visits}
                    options={[1, 2, 3, 5, 10]}
                    onChange={onChangeVisits}
                />
                <Slider
                    color={color}
                    title={'Yearly Value of Each Customer'}
                    total={aro * visits}
                />
                <Slider
                    color={color}
                    title={'Average Number of Years You Keep A Customer'}
                    total={years}
                    options={[1, 3, 5, 10, 20]}
                    onChange={onChangeYears}
                />
                <Total
                    color={color}
                    equation={`$${aro * visits} x ${years} =`}
                    total={total}
                />
            </Calculation>
            <Right
                src={illustration}
                alt={'Person standing in front of large piles of money'}
            >
                <Tip
                        color={color}
                        title={`Here's a Tip!`}
                    >
                        <p>Tap on any number to get an in-depth description or simply select the “?” icon.</p>
                </Tip>
            </Right>
        </Step>
    )
}