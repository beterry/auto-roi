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
import mediumImage from '../../images/illustrations/phones-medium-whole.svg'

export default ({aro, quantity, redemptionRate, cost, onChangeRedemptionRate, onChangeQuantity}) => (
    <Step>
        <LeftCopy
            title={'STEP 1 OF 3'}
            color={'orange'}
        >
            <p>Now, using the Average Repair Order you specified in Step 1 in Section 1, we can calculate your short term roi on your direct mail campaign.</p>
        </LeftCopy>
        <Calculation
            color={'orange'}
            title={'SHORT TERM DIRECT MAIL ROI'}
        >
            <Slider
                title={'Quantity Mailed'}
                total={quantity}
                options={[1000, 5000, 10000, 15000, 20000]}
                onChange={onChangeQuantity}
            />
            <Slider
                title={'Redemption Rate %'}
                total={redemptionRate}
                options={[0.005, 0.01, 0.02, 0.03, 0.05]}
                onChange={onChangeRedemptionRate}
            />
            <Slider
                title={'Increased Car Count'}
                total={quantity * redemptionRate}
            />
            <Slider
                title={'Average Repair Cost'}
                total={aro}
            />
            <Slider
                title={'Gross Revenue'}
                total={aro * (quantity * redemptionRate)}
            />
            <Slider
                title={'Less Estimated Cost of Mailer'}
                total={cost}
            />
            <Slider
                title={'Net Revenue'}
                total={(aro * quantity * redemptionRate) - cost}
            />
            <Total
                equation={`$${(aro * quantity * redemptionRate) - cost} - $${cost} =`}
                total={((aro * quantity * redemptionRate) - cost) / cost}
            />
        </Calculation>
        <Illustration
            src={mediumImage}
            alt={'People calling your shop on their phones'}
        />
    </Step>
)