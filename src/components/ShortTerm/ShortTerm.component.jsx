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
import small from '../../images/illustrations/phones-small-whole.svg'
import medium from '../../images/illustrations/phones-medium-whole.svg'
import large from '../../images/illustrations/phones-large-whole.svg'

export default ({color, aro, quantity, redemptionRate, cost, onChangeRedemptionRate, onChangeQuantity}) => {
    let total = (((aro * quantity * redemptionRate) - cost) / cost)
    let illustration
    if (total <= 7) {
        illustration = small
    } else if (total > 7 && total <= 15){
        illustration = medium
    } else {
        illustration = large
    }

    return(
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
                tip={[
                    'Quantity Mailed',
                    'multiplied by (x)',
                    'Redemption Rate %',
                    'multiplied by (x)',
                    'Average Repair Cost (ARO)',
                    'minus (-)',
                    'Less Estimated Cost of Mailer',
                    'divided by (/)',
                    'Less Estimated Cost of Mailer',
                    'equals (=)',
                    'Short Term Direct Mail ROI'
                ]}
            >
                <Slider
                    color={color}
                    title={'Quantity Mailed'}
                    total={quantity}
                    options={[1000, 5000, 10000, 15000, 20000]}
                    onChange={onChangeQuantity}
                    tip={[
                        'Choose the number of mailers you would like to send out.'
                    ]}
                />
                <Slider
                    color={color}
                    title={'Redemption Rate %'}
                    total={redemptionRate}
                    options={[0.005, 0.01, 0.02, 0.03, 0.05]}
                    onChange={onChangeRedemptionRate}
                    tip={[
                        'The percentage of how many offers are redeemed.'
                    ]}
                />
                <Slider
                    color={color}
                    title={'Increased Car Count'}
                    total={quantity * redemptionRate}
                    tip={[
                        'Quantity Mailed',
                        'multiplied by (x)',
                        'Redemption Rate %'
                    ]}
                />
                <Slider
                    color={'#69B8EB'}
                    title={'Average Repair Cost'}
                    total={aro}
                    tip={[
                        'Specified in Step 1'
                    ]}
                />
                <Slider
                    color={color}
                    title={'Gross Revenue'}
                    total={aro * (quantity * redemptionRate)}
                    tip={[
                        'Increased Car Count',
                        'multiplied by (x)',
                        'Average Repair Order'
                    ]}
                />
                <Slider
                    color={color}
                    title={'Less Estimated Cost of Mailer'}
                    total={cost}
                    tip={[
                        'This number represents an estimated cost of an oversized postcard 5.5x10.5 based on the quantity chosen.'
                    ]}
                />
                <Slider
                    color={color}
                    title={'Net Revenue'}
                    total={(aro * quantity * redemptionRate) - cost}
                    tip={[
                        'Less Estimated Cost of Mailer',
                        'subtracted from (-)'
                    ]}
                />
                <Total
                    color={color}
                    equation={`$${(aro * quantity * redemptionRate) - cost} - $${cost} =`}
                    total={`${total.toFixed(2)}%`}
                    tip={[
                    'Net Revenue',
                    'divided by (/)',
                    'Less Estimated Cost of Mailer'
                ]}
                />
            </Calculation>
            <Right
                src={illustration}
                alt={'People calling your shop on their phones'}
            />
        </Step>
    )
}