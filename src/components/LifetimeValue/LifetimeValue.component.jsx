import React from 'react'

//import styles

//import components
import Step from '../Step/Step.component'
import LeftCopy from '../LeftCopy/LeftCopy.component'
import Calculation from '../Calculation/Calculation.component'
import Illustration from '../Illustration/Illustration.component'
import Tip from '../Tip/Tip.component'
import Slider from '../Slider/Slider.component'
import Total from '../Total/Total.component'

//import images
import medium from '../../images/illustrations/money-medium-whole.svg'

export default ({color, aro, visits, years, onChangeAro, onChangeVisits, onChangeYears}) => (
    <Step>
        <LeftCopy
            title={'STEP 1 OF 3'}
            color={color}
        >
            <p>We start by calculating the real value of each customer you aquire.</p>
            <Tip
                title={`Here's a Tip!`}
            >
                <p>Click on any number to learn more. Or simply tap on the "?" icon.</p>
            </Tip>
        </LeftCopy>
        <Calculation
            color={color}
            title={'TOTAL LIFETIME VALUE OF ONE CUSTOMER'}
        >
            <Slider
                color={color}
                title={'Average Repair Order (ARO)'}
                total={aro}
                options={[100, 300, 573, 750, 1000]}
                onChange={onChangeAro}
            />
            <Slider
                color={color}
                title={'Number of Visits a Customer Makes Per Year'}
                total={visits}
                options={[1, 2, 3, 5, 10]}
                onChange={onChangeVisits}
            />
            <Slider
                color={color}
                title={'Yearly Value of Each Customer'}
                total={aro * visits}
            />
            <Slider
                color={color}
                title={'Average Number of Years You Keep A Customer'}
                total={years}
                options={[1, 3, 5, 10, 20]}
                onChange={onChangeYears}
            />
            <Total
                color={color}
                equation={`$${aro * visits} x ${years} =`}
                total={aro * visits * years}
            />
        </Calculation>
        <Illustration
            src={medium}
            alt={'Person standing in front of large piles of money'}
        />
    </Step>
)