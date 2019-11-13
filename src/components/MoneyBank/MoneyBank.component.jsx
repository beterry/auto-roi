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

//import libraries
import numeral from 'numeral'

export default ({color, aro, visits, years, referrals, quantity, redemptionRate, cost, retention, profitMargin, onChangeProfitMargin}) => {
    //determine what illustration to display
    let illustration
    if (profitMargin < 0.4){
        illustration = small
    } else if (profitMargin == 0.4 || profitMargin == 0.5 ){
        illustration = medium
    } else{
        illustration = large
    }

    let potentialNetRevenue = (((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))) - cost
    let total = potentialNetRevenue * profitMargin

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
                tip={[
                    'Your Shops Net Profit Margin',
                    'multiplied by (x)',
                    'Potential Net Revenue',
                    'equals (=)',
                    'How much money you take to the bank'
                ]}
            >
                <Slider
                    color={'#0067A4'}
                    title={'Potential Net Revenue'}
                    total={numeral(potentialNetRevenue).format('$0,0')}
                    tip={[
                        'Calculated in Step 5',
                        'Less Estimated Cost of Mailer',
                        'subtracted from (-)',
                        'Long Term Revenue'
                    ]}
                />
                <Slider
                    color={color}
                    title={'Your Shops Net Profit Margin'}
                    total={numeral(profitMargin).format('0%')}
                    options={[0.3, 0.4, 0.5, 0.6, 0.7]}
                    onChange={onChangeProfitMargin}
                    tip={[
                        'The percentage of revenue left after all expenses have been deducted from sales.'
                    ]}
                />
                <Total
                    color={color}
                    equation={`$${(((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))) - cost} x $${profitMargin} =`}
                    total={numeral(total).format('$0,0')}
                    tip={[
                        'Your Shops Net Profit Margin',
                        'multiplied by (x)',
                        'Potential Net Revenue'
                    ]}
                />
            </Calculation>
            <Right
                src={illustration}
                alt={'Piggy bank'}
            />
        </Step>
    )
}