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
import illustration from '../../images/illustrations/money-pile.svg'

export default ({aro, visits, years, referrals, quantity, redemptionRate, cost, retention, onChangeRetention}) => (
    <Step>
        <LeftCopy
            title={'STEP 2 OF 3'}
            color={'blue'}
        >
            <p>Now that you understand your potential short-term ROI, we must look at the long-term ROI. Calculating your Long-Term ROI will allow you to look at the bigger impact from revenue generated by the new customers brought in by your direct mail campaigns.</p>
            <p>All you have to do to achieve these results is take care of your customers and ask for refferals - the things all successful shops already do on daily basis.</p>
        </LeftCopy>
        <Calculation
            color={'blue'}
            title={'LONG TERM DIRECT MAIL ROI'}
        >
            <Slider
                title={'Quantity Mailed'}
                total={quantity}
            />
            <Slider
                title={'Redemption Rate %'}
                total={redemptionRate}
            />
            <Slider
                title={'Increased Car Count'}
                total={quantity * redemptionRate}
            />
            <Slider
                title={'Retention Rate'}
                total={retention}
                options={[0.6, 0.7, 0.8, 0.9, 1]}
                onChange={onChangeRetention}
            />
            <Slider
                title={'Cars Retained'}
                total={retention * (quantity * redemptionRate)}
            />
            <Slider
                title={'Total Lifetime Value of Your Customer'}
                total={(aro * visits * years * referrals) + (aro * visits * years)}
            />
            <Slider
                title={'Long Term Revenue'}
                total={((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))}
            />
            <Slider
                title={'Less Estimated Cost of Mailer'}
                total={cost}
            />
            <Slider
                title={'Potential Net Revenue'}
                total={(((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))) - cost}
            />
            <Total
                equation={`$${(((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))) - cost} - $${cost} =`}
                total={((((aro * visits * years * referrals) + (aro * visits * years)) * (retention * (quantity * redemptionRate))) - cost) / cost}
            />
        </Calculation>
        <Illustration
            src={illustration}
            alt={'Pile of money'}
        />
    </Step>
)