import React from 'react'

//import styles

//import components
import Step from '../Step/Step.component'
import LeftCopy from '../LeftCopy/LeftCopy.component'
import Calculation from '../Calculation/Calculation.component'
import Illustration from '../Illustration/Illustration.component'
import Slider from '../Slider/Slider.component'
import Total from '../Total/Total.component'

//import images
import tempImage from '../../images/instructions/car-red.png'

export default ({aro, visits, years, referrals, quantity, redemptionRate, cost, retention, profitMargin, onChangeProfitMargin}) => (
    <Step>
        <LeftCopy
            title={'STEP 3 OF 3'}
            color={'red'}
        >
            <p>Revenue & Percentages are great, however, all that matters at the end of the day is how much you take to the bank.</p>
            <p>In order to calculate the net profits generated, simply select your shops net profit margins from your latest P&L statements.</p>
        </LeftCopy>
        <Calculation
            color={'red'}
            title={'HOW MUCH MONEY ARE YOU TAKING TO THE BANK?'}
        >
            <Slider
                title={'Potential Net Revenue'}
                total={(((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))) - cost}
            />
            <Slider
                title={'Your Shops Net Profit Margin'}
                total={profitMargin}
                options={[0.3, 0.4, 0.5, 0.6, 0.7]}
                onChange={onChangeProfitMargin}
            />
            <Total
                equation={`$${(((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))) - cost} x $${profitMargin} =`}
                total={((((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))) - cost) * profitMargin}
            />
        </Calculation>
        <Illustration
            src={tempImage}
            alt={'This is a temporary image'}
        />
    </Step>
)