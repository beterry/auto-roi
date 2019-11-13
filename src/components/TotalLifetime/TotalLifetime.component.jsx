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
import illustration from '../../images/illustrations/total-lifetime.svg'

export default ({color, aro, visits, years, referrals}) => (
    <Step>
        <Left
            title={'STEP 3 OF 3'}
            color={color}
            show={['Using your shops numbers entered above we are able to calculate the Total Lifetime Value of each of your customers.']}
            hidden={[
                'In other words the total amount of potential revenue generated from each new customer over the timespan they remain a customer plus the addition of the important revenue generated from these customer referrals.'
            ]}
        />
        <Calculation
            color={color}
            title={'TOTAL LIFETIME VALUE'}
            tip={[
                'Value of One Customer',
                'plus (+)',
                'Revenue From Referrals',
                'equals (=)',
                'Total Lifetime Value'
            ]}
        >
            <Slider
                color={'#69B8EB'}
                title={'Value of One Customer'}
                total={aro * visits * years}
                tip={[
                    'Calculated in Step 1',
                    'Yearly Value of Each Customer',
                    'multiplied by (x)',
                    'Average Number of Years You Keep a Customer'
                ]}
            />
            <Slider
                color={'#00C25F'}
                title={'Revenue from Referrals'}
                total={aro * visits * years * referrals}
                tip={[
                    'Calculated in Step 2',
                    'Value of One of Your Customers',
                    'multiplied by (x)',
                    'Average Number of Referrals Made by One Customer'
                ]}
            />
            <Total
                color={color}
                equation={`$${aro * visits * years} + $${aro * visits * years * referrals} =`}
                total={(aro * visits * years * referrals) + (aro * visits * years)}
                tip={[
                    'Value of One Customer',
                    'plus (+)',
                    'Revenue From Referrals'
                ]}
            />
        </Calculation>
        <Right
            src={illustration}
            alt={'People sitting and standing beside huge piles of money'}
        />
    </Step>
)