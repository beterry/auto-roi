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

//import libraries
import numeral from 'numeral'

export default ({color, aro, quantity, redemptionRate, cost, onChangeRedemptionRate, onChangeQuantity, theme}) => {
    let total = ((aro * quantity * redemptionRate) - cost) / cost
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
                theme={theme}
            >
                <Tip
                    color={color}
                    title={'Redemption Rate %'}
                >
                    <p 
                        className={theme ? 'light' : 'dark'}
                    >
                        1/2% Is the minimum targeted benchmark redemption rate. That said, with the right creative, mailing list, CTA and strategy, this number can easily be exceeded.
                    </p>
                </Tip>
                <Tip
                    color={color}
                    title={'Cost of Mailer'}
                >
                    <p
                        className={theme ? 'light' : 'dark'}
                    >
                        This is based on Mail Sharks all-inclusive price for a 5.5x10.5 postcard and quantity you have selected to mail.
                    </p>
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
                theme={theme}
            >
                <Slider
                    color={color}
                    title={'Quantity Mailed'}
                    total={numeral(quantity).format(0,0)}
                    options={[1000, 5000, 10000, 15000, 20000]}
                    onChange={onChangeQuantity}
                    tip={[
                        'Choose the number of mailers you would like to send out.'
                    ]}
                    theme={theme}
                    initPosition={1}
                />
                <Slider
                    color={color}
                    title={'Redemption Rate %'}
                    total={numeral(redemptionRate).format('0.0%')}
                    options={[0.005, 0.01, 0.02, 0.03, 0.05]}
                    onChange={onChangeRedemptionRate}
                    tip={[
                        'The percentage of how many offers are redeemed.'
                    ]}
                    theme={theme}
                    initPosition={0}
                />
                <Slider
                    color={color}
                    title={'Increased Car Count'}
                    total={quantity * redemptionRate}
                    equation={numeral(quantity).format(0,0)+' x '+numeral(redemptionRate).format('0.0%')}
                    tip={[
                        'Quantity Mailed',
                        'multiplied by (x)',
                        'Redemption Rate %'
                    ]}
                    theme={theme}
                />
                <Slider
                    color={'#69B8EB'}
                    title={'Average Repair Cost'}
                    total={numeral(aro).format('$0,0')}
                    tip={[
                        'Specified in Step 1'
                    ]}
                    theme={theme}
                />
                <Slider
                    color={color}
                    title={'Gross Revenue'}
                    total={numeral(aro * (quantity * redemptionRate)).format('$0,0')}
                    equation={numeral(aro).format('$0,0')+' x '+(quantity * redemptionRate)}
                    tip={[
                        'Increased Car Count',
                        'multiplied by (x)',
                        'Average Repair Order'
                    ]}
                    theme={theme}
                />
                <Slider
                    color={color}
                    title={'Less Estimated Cost of Mailer'}
                    total={numeral(cost).format('$0,0')}
                    tip={[
                        'This number represents an estimated cost of an oversized postcard 5.5x10.5 based on the quantity chosen.'
                    ]}
                    theme={theme}
                />
                <Slider
                    color={color}
                    title={'Net Revenue'}
                    total={numeral((aro * quantity * redemptionRate) - cost).format('$0,0')}
                    equation={numeral(aro * (quantity * redemptionRate)).format('$0,0')+' + '+numeral(cost).format('$0,0')}
                    tip={[
                        'Less Estimated Cost of Mailer',
                        'subtracted from (-)'
                    ]}
                    theme={theme}
                />
                <Total
                    color={color}
                    equation={`${numeral((aro * quantity * redemptionRate) - cost).format('$0,0')} / ${numeral(cost).format('$0,0')} =`}
                    total={numeral(total).format('0.00%')}
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