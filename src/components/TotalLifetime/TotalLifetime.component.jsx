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

export default ({aro, visits, years, referrals}) => (
    <Step>
        <LeftCopy
            title={'STEP 3 OF 3'}
            color={'purple'}
        >
            <p>Using your shops numbers entered above, we are able to calculate the Total Lifetime Value of each of your customers.</p>
        </LeftCopy>
        <Calculation
            color={'purple'}
            title={'TOTAL LIFETIME VALUE'}
        >
            <Slider
                title={'Value of One Customer'}
                total={aro * visits * years}
            />
            <Slider
                title={'Revenue from Referrals'}
                total={aro * visits * years * referrals}
            />
            <Total
                equation={`$${aro * visits * years} + $${aro * visits * years * referrals} =`}
                total={(aro * visits * years * referrals) + (aro * visits * years)}
            />
        </Calculation>
        <Illustration
            src={tempImage}
            alt={'This is a temporary image'}
        />
    </Step>
)