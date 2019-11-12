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
import mediumImage from '../../images/illustrations/testimonials-medium-whole.svg'

export default ({color, aro, visits, years, referrals, onChangeReferrals}) => (
    <Step>
        <LeftCopy
            title={'STEP 2 OF 3'}
            color={color}
        >
            <p>Every quality auto repair shop recieves referrals from happy customers. As a matter of fact, referrals are the main leading generator for the most successful shops.</p>
        </LeftCopy>
        <Calculation
            color={color}
            title={'REVENUE FROM NEW CUSTOMER REFERRALS'}
        >
            <Slider
                color={'#69B8EB'}
                title={'Total Lifetime Value of One Customer'}
                total={aro * visits * years}
            />
            <Slider
                color={color}
                title={'Average Number of Referrals Made By One Customer'}
                total={referrals}
                options={[0, 1, 2, 5, 10]}
                onChange={onChangeReferrals}
            />
            <Total
                color={color}
                equation={`$${aro * visits * years} x ${referrals} =`}
                total={aro * visits * years * referrals}
            />
        </Calculation>
        <Illustration
            src={mediumImage}
            alt={'People talking amongst eachother'}
        />
    </Step>
)