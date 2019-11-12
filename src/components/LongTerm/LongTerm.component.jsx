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
import illustration from '../../images/illustrations/money-pile.svg'

export default ({color, aro, visits, years, referrals, quantity, redemptionRate, cost, retention, onChangeRetention}) => (
    <Step>
        <Left
            title={'STEP 2 OF 3'}
            color={color}
            show={[
                'Although Redemption Rates & Revenue are critical key performance indicators, what is of most important are your NET PROFITS and how much money you actually take to the bank.',
                'It is quite possible to get a lower redemption rate but have a higher ROI due to higher dollar repair orders. Remember, you don’t take Percentages to the bank you take dollars to the bank.',
                'In order to calculate your potential net profits generated from your direct mail campaigns, simply select our shops net profit margin based on your latest P&L.'
            ]}
        >
            <Tip
                color={color}
                title={'Cost of Mailer'}
            >
                <p>This is based on Mail Sharks all-inclusive price for a 5.5x10.5 postcard and quantity you have selected to mail.</p>
            </Tip>
        </Left>
        <Calculation
            color={color}
            title={'LONG TERM DIRECT MAIL ROI'}
        >
            <Slider
                color={'#FF8C00'}
                title={'Quantity Mailed'}
                total={quantity}
            />
            <Slider
                color={'#FF8C00'}
                title={'Redemption Rate %'}
                total={redemptionRate}
            />
            <Slider
                color={'#FF8C00'}
                title={'Increased Car Count'}
                total={quantity * redemptionRate}
            />
            <Slider
                color={color}
                title={'Retention Rate'}
                total={retention}
                options={[0.6, 0.7, 0.8, 0.9, 1]}
                onChange={onChangeRetention}
            />
            <Slider
                color={color}
                title={'Cars Retained'}
                total={retention * (quantity * redemptionRate)}
            />
            <Slider
                color={'#9055A2'}
                title={'Total Lifetime Value of Your Customer'}
                total={(aro * visits * years * referrals) + (aro * visits * years)}
            />
            <Slider
                color={color}
                title={'Long Term Revenue'}
                total={((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))}
            />
            <Slider
                color={color}
                title={'Less Estimated Cost of Mailer'}
                total={cost}
            />
            <Slider
                color={color}
                title={'Potential Net Revenue'}
                total={(((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))) - cost}
            />
            <Total
                color={color}
                equation={`$${(((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))) - cost} - $${cost} =`}
                total={`${(((((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))) - cost) / cost).toFixed(2)}%`}
            />
        </Calculation>
        <Right
            src={illustration}
            alt={'Pile of money'}
        />
    </Step>
)