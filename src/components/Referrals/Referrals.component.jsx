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
import mediumImage from '../../images/illustrations/testimonials-medium-whole.svg'

export default ({color, aro, visits, years, referrals, onChangeReferrals}) => (
    <Step>
        <Left
            title={'STEP 2 OF 3'}
            color={color}
            show={['Every quality auto repair shop receives referrals from their happy customers. As a matter of fact, referrals remain the primary lead source for many of the top shops in the country.']}
            hidden={[
                'Therefore, we must determine the average number of referrals you receive from each of your new customers. These referrals can be other family members, friends, neighbors or colleagues’ vehicles.',
                'Fill in whatever number of referrals is true to your shop. But don’t skip this step! Revenue generated from referrals must be part of the value of that new customer. The fact is, you would have never received that referral without the initial direct mail that attracted that new customer who referred them to your shop.'
            ]}
        >
        </Left>
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
        <Right
            src={mediumImage}
            alt={'People talking amongst eachother'}
        />
    </Step>
)