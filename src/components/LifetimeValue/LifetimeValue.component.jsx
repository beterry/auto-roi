import React from 'react'

//import styles

//import components
import Step from '../Step/Step.component'
import LeftCopy from '../LeftCopy/LeftCopy.component'
import Calculation from '../Calculation/Calculation.component'
import Illustration from '../Illustration/Illustration.component'
import Tip from '../Tip/Tip.component'

//import images
import tempImage from '../../images/instructions/car-red.png'

export default () => (
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
        <Calculation>Put sliders here</Calculation>
        <Illustration
            src={tempImage}
            alt={'This is a temporary image'}
        />
    </Step>
)