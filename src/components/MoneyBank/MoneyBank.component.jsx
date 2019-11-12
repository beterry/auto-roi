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
import small from '../../images/illustrations/pig-small.svg'
import medium from '../../images/illustrations/pig-medium.svg'
import large from '../../images/illustrations/pig-large.svg'

export default ({color, aro, visits, years, referrals, quantity, redemptionRate, cost, retention, profitMargin, onChangeProfitMargin}) => {
    //determine what illustration to display
    let illustration
    if (profitMargin < 0.4){
        illustration = small
    } else if (profitMargin == 0.4 || profitMargin ==0.5 ){
        illustration = medium
    } else{
        illustration = large
    }

    let total = ((((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))) - cost) * profitMargin

    return(
        <Step>
            <Left
                title={'STEP 3 OF 3'}
                color={color}
                show={[
                    'Revenue & Percentages are great, however, all that matters at the end of the day is how much you take to the bank in the form of NET PROFITS.',
                    'In order to calculate the Net Profits generated, simply select your shops net profit margins from your latest P&L statement.'
                ]}
            />
            <Calculation
                color={color}
                title={'HOW MUCH MONEY ARE YOU TAKING TO THE BANK?'}
            >
                <Slider
                    color={'#0067A4'}
                    title={'Potential Net Revenue'}
                    total={(((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))) - cost}
                />
                <Slider
                    color={color}
                    title={'Your Shops Net Profit Margin'}
                    total={profitMargin}
                    options={[0.3, 0.4, 0.5, 0.6, 0.7]}
                    onChange={onChangeProfitMargin}
                />
                <Total
                    color={color}
                    equation={`$${(((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))) - cost} x $${profitMargin} =`}
                    total={Math.round(total)}
                />
            </Calculation>
            <Right
                src={illustration}
                alt={'Piggy bank'}
            />
        </Step>
    )
}