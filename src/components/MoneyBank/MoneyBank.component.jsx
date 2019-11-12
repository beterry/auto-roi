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
import mediumImage from '../../images/illustrations/pig-medium.svg'

export default ({color, aro, visits, years, referrals, quantity, redemptionRate, cost, retention, profitMargin, onChangeProfitMargin}) => (
    <Step>
        <LeftCopy
            title={'STEP 3 OF 3'}
            color={color}
        >
            <p>Revenue & Percentages are great, however, all that matters at the end of the day is how much you take to the bank.</p>
            <p>In order to calculate the net profits generated, simply select your shops net profit margins from your latest P&L statements.</p>
        </LeftCopy>
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
                total={((((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))) - cost) * profitMargin}
            />
        </Calculation>
        <Illustration
            src={mediumImage}
            alt={'Piggy bank'}
        />
    </Step>
)