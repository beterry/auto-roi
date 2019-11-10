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
import tempImage from '../../images/instructions/car-red.png'

export default ({aro, visits, years, onChangeAro, onChangeVisits, onChangeYears}) => (
    <Step>
        <LeftCopy
            title={'STEP 1 OF 3'}
            color={'lightblue'}
        >
            <p>We start by calculating the real value of each customer you aquire.</p>
            <Tip
                title={`Here's a Tip!`}
            >
                <p>Click on any number to learn more. Or simply tap on the "?" icon.</p>
            </Tip>
        </LeftCopy>
        <Calculation
            color={'lightblue'}
            title={'TOTAL LIFETIME VALUE OF ONE CUSTOMER'}
        >
            <Slider
                title={'Average Repair Order (ARO)'}
                total={aro}
                options={[100, 300, 573, 750, 1000]}
                onChange={onChangeAro}
            />
            <Slider
                title={'Number of Visits a Customer Makes Per Year'}
                total={visits}
                options={[1, 2, 3, 5, 10]}
                onChange={onChangeVisits}
            />
            <Slider
                title={'Yearly Value of Each Customer'}
                total={aro * visits}
            />
            <Slider
                title={'Average Number of Years You Keep A Customer'}
                total={years}
                options={[1, 3, 5, 10, 20]}
                onChange={onChangeYears}
            />
            <Total
                equation={`$${aro * visits} x ${years} =`}
                total={aro * visits * years}
            />
        </Calculation>
        <Illustration
            src={tempImage}
            alt={'This is a temporary image'}
        />
    </Step>
)