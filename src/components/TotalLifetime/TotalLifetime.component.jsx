import React from 'react'

//import styles

//import components
import Step from '../Step/Step.component'
import Left from '../Left/Left.component'
import Calculation from '../Calculation/Calculation.component'
import Illustration from '../Illustration/Illustration.component'
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
        >
            <Slider
                color={'#69B8EB'}
                title={'Value of One Customer'}
                total={aro * visits * years}
            />
            <Slider
                color={'#00C25F'}
                title={'Revenue from Referrals'}
                total={aro * visits * years * referrals}
            />
            <Total
                color={color}
                equation={`$${aro * visits * years} + $${aro * visits * years * referrals} =`}
                total={(aro * visits * years * referrals) + (aro * visits * years)}
            />
        </Calculation>
        <Illustration
            src={illustration}
            alt={'People sitting and standing beside huge piles of money'}
        />
    </Step>
)