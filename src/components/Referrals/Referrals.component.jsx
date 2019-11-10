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

export default ({aro, visits, years, referrals, onChangeReferrals}) => (
    <Step>
        <LeftCopy
            title={'STEP 2 OF 3'}
            color={'green'}
        >
            <p>Every quality auto repair shop recieves referrals from happy customers. As a matter of fact, referrals are the main leading generator for the most successful shops.</p>
        </LeftCopy>
        <Calculation
            color={'green'}
            title={'REVENUE FROM NEW CUSTOMER REFERRALS'}
        >
            <Slider
                title={'Total Lifetime Value of One Customer'}
                total={aro * visits * years}
            />
            <Slider
                title={'Average Number of Referrals Made By One Customer'}
                total={referrals}
                options={[0, 1, 2, 5, 10]}
                onChange={onChangeReferrals}
            />
            <Total
                equation={`$${aro * visits * years} x ${referrals} =`}
                total={aro * visits * years * referrals}
            />
        </Calculation>
        <Illustration
            src={tempImage}
            alt={'This is a temporary image'}
        />
    </Step>
)