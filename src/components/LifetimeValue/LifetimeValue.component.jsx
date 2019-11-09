import React from 'react'

//import styles

//import components
import Step from '../Step/Step.component'
import LeftCopy from '../LeftCopy/LeftCopy.component'
import Calculation from '../Calculation/Calculation.component'
import Illustration from '../Illustration/Illustration.component'
import Tip from '../Tip/Tip.component'
import Slider from '../Slider/Slider.component'

//import images
import tempImage from '../../images/instructions/car-red.png'

export default ({aro, onChangeAro}) => (
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
                options={[
                    100,
                    300,
                    573,
                    750,
                    1000
                ]}
                onChange={onChangeAro}
            />
        </Calculation>
        <Illustration
            src={tempImage}
            alt={'This is a temporary image'}
        />
    </Step>
)