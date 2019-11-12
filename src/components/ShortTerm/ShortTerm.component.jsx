import React from 'react'

//import styles

//import components
import Step from '../Step/Step.component'
import Left from '../Left/Left.component'
import Tip from '../Tip/Tip.component'
import Calculation from '../Calculation/Calculation.component'
import Right from '../Right/Right.component'
import Slider from '../Slider/Slider.component'
import Total from '../Total/Total.component'

//import images
import mediumImage from '../../images/illustrations/phones-medium-whole.svg'

export default ({color, aro, quantity, redemptionRate, cost, onChangeRedemptionRate, onChangeQuantity}) => (
    <Step>
        <Left
            title={'STEP 1 OF 3'}
            color={color}
            show={['Now that you have you have entered your ARO Average Repair Order in step 1 we can begin to calculate your short-term ROI on your direct mail campaign.']}
            hidden={['We define Short term ROI as revenue that comes in within the first 3-6 months of your last mailer being sent out. It’s important you remain patient and give your direct mail marketing time to work. Remember someone that receives your direct mail today, might not have a broken car until months down the line. This is proven out time and time again with call tracking.']}
        >
            <Tip
                color={color}
                title={'Redemption Rate %'}
            >
                <p>1/2% Is the minimum targeted benchmark redemption rate. That said, with the right creative, mailing list, CTA and strategy, this number can easily be exceeded.</p>
            </Tip>
            <Tip
                color={color}
                title={'Cost of Mailer'}
            >
                <p>This is based on Mail Sharks all-inclusive price for a 5.5x10.5 postcard and quantity you have selected to mail.</p>
            </Tip>
        </Left>
        <Calculation
            color={color}
            title={'SHORT TERM DIRECT MAIL ROI'}
        >
            <Slider
                color={color}
                title={'Quantity Mailed'}
                total={quantity}
                options={[1000, 5000, 10000, 15000, 20000]}
                onChange={onChangeQuantity}
            />
            <Slider
                color={color}
                title={'Redemption Rate %'}
                total={redemptionRate}
                options={[0.005, 0.01, 0.02, 0.03, 0.05]}
                onChange={onChangeRedemptionRate}
            />
            <Slider
                color={color}
                title={'Increased Car Count'}
                total={quantity * redemptionRate}
            />
            <Slider
                color={'#69B8EB'}
                title={'Average Repair Cost'}
                total={aro}
            />
            <Slider
                color={color}
                title={'Gross Revenue'}
                total={aro * (quantity * redemptionRate)}
            />
            <Slider
                color={color}
                title={'Less Estimated Cost of Mailer'}
                total={cost}
            />
            <Slider
                color={color}
                title={'Net Revenue'}
                total={(aro * quantity * redemptionRate) - cost}
            />
            <Total
                color={color}
                equation={`$${(aro * quantity * redemptionRate) - cost} - $${cost} =`}
                total={`${(((aro * quantity * redemptionRate) - cost) / cost).toFixed(2)}%`}
            />
        </Calculation>
        <Right
            src={mediumImage}
            alt={'People calling your shop on their phones'}
        />
    </Step>
)