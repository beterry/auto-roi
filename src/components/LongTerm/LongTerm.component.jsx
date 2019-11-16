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

//import libraries
import numeral from 'numeral'

export default ({color, aro, visits, years, referrals, quantity, redemptionRate, cost, retention, onChangeRetention, theme}) => {
    let increasedCarCount = quantity * redemptionRate
    let carsRetained = increasedCarCount * retention
    let lifetimeValue = aro * visits * years
    let longTermRevenue = lifetimeValue * carsRetained
    let potentialNetRevenue = longTermRevenue - cost
    let total = potentialNetRevenue / cost

    return(
        <Step>
            <Left
                title={'STEP 2 OF 3'}
                color={color}
                show={[
                    'Although Redemption Rates & Revenue are critical key performance indicators, what is of most important are your NET PROFITS and how much money you actually take to the bank.',
                    'It is quite possible to get a lower redemption rate but have a higher ROI due to higher dollar repair orders. Remember, you don’t take Percentages to the bank you take dollars to the bank.',
                    'In order to calculate your potential net profits generated from your direct mail campaigns, simply select our shops net profit margin based on your latest P&L.'
                ]}
                theme={theme}
            >
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
                title={'LONG TERM DIRECT MAIL ROI'}
                tip={[
                    'Quantity Mailed',
                    'multiplied by (x)',
                    '% Return',
                    'multiplied by (x)',
                    'Retention Rate',
                    'multiplied by (x)',
                    'Total Lifetime Value of Your Customer',
                    'minus (-)',
                    'Less Estimated Cost of Mailer',
                    'divided by (/)',
                    'Less Estimated Cost of Mailer',
                    'equals (=)',
                    'Long Term Direct Mail ROI'
                ]}
                theme={theme}
            >
                <Slider
                    color={'#FF8C00'}
                    title={'Quantity Mailed'}
                    total={numeral(quantity).format('0,0')}
                    tip={[
                        'Specified in Step 4',
                        'This was the number of mailers chosen in step 4.'
                    ]}
                    theme={theme}
                />
                <Slider
                    color={'#FF8C00'}
                    title={'Redemption Rate %'}
                    total={numeral(redemptionRate).format('0.0%')}
                    tip={[
                        'Specified in Step 4',
                        'The percentage of how many offers are redeemed.'
                    ]}
                    theme={theme}
                />
                <Slider
                    color={'#FF8C00'}
                    title={'Increased Car Count'}
                    total={numeral(increasedCarCount).format('0,0')}
                    equation={numeral(quantity).format('0,0')+' x '+numeral(redemptionRate).format('0.0%')}
                    tip={[
                        'Calculated in Step 4',
                        'Quantity Mailed',
                        'multiplied by (x)',
                        'Redemption Rate %'
                    ]}
                    theme={theme}
                />
                <Slider
                    color={color}
                    title={'Customer Retention Rate'}
                    total={numeral(retention).format('0%')}
                    options={[0.6, 0.7, 0.8, 0.9, 1]}
                    onChange={onChangeRetention}
                    tip={[
                        'What % of your customers remain customers after their first visit?'
                    ]}
                    theme={theme}
                />
                <Slider
                    color={color}
                    title={'Cars Retained'}
                    total={carsRetained}
                    equation={numeral(increasedCarCount).format('0,0')+' x '+numeral(retention).format('0%')}
                    tip={[
                        'Increased Car Count',
                        'multiplied by (x)',
                        'Customer Retention Rate'
                    ]}
                    theme={theme}
                />
                <Slider
                    color={'#9055A2'}
                    title={'Total Lifetime Value of Your Customer'}
                    total={numeral(lifetimeValue).format('$0,0')}
                    tip={[
                        'Calculated in Step 3',
                        'Value of One Customer',
                        'plus (+)',
                        'Revenue From Referrals'
                    ]}
                    theme={theme}
                />
                <Slider
                    color={color}
                    title={'Long Term Revenue'}
                    total={numeral(longTermRevenue).format('$0,0')}
                    equation={numeral(lifetimeValue).format('$0,0')+' x '+carsRetained}
                    tip={[
                        'Total Lifetime Value of Your Customer',
                        'multiplied by (x)',
                        'Cars Retained'
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
                    title={'Potential Net Revenue'}
                    total={numeral(potentialNetRevenue).format('$0,0')}
                    equation={numeral(longTermRevenue).format('$0,0')+' - '+numeral(cost).format('$0,0')}
                    tip={[
                        'Less Estimated Cost of Mailer',
                        'subtracted from (-)',
                        'Long Term Revenue'
                    ]}
                    theme={theme}
                />
                <Total
                    color={color}
                    equation={`${numeral(potentialNetRevenue).format('$0,0')} / ${numeral(cost).format('$0,0')} =`}
                    total={numeral(total).format('0.00%')}
                    tip={[
                        'Potential Net Revenue',
                        'divided by (/)',
                        'Less Estimated Cost of Mailer'
                    ]}
                />
            </Calculation>
            <Right
                src={illustration}
                alt={'Pile of money'}
            />
        </Step>
    )
}