import React from 'react'

//import styles

//import components
import Step from '../Step/Step.component'
import Left from '../Left/Left.component'
import Calculation from '../Calculation/Calculation.component'
import Right from '../Right/Right.component'
import Slider from '../Slider/Slider.component'
import Total from '../Total/Total.component'

//import images
import illustration from '../../images/illustrations/total-lifetime.svg'

//import numeral
import numeral from 'numeral'

export default ({color, aro, visits, years, referrals, theme}) => {
    const valueOneCustomer = aro * visits * years
    const referralRevenue = valueOneCustomer * referrals
    let total = valueOneCustomer + referralRevenue

    let formatTotal
    if (total >= 1000000){
        formatTotal = numeral(total).format('$0.0a')
    } else {
        formatTotal = numeral(total).format('$0,0')
    }

    let formatReferrals = numeral(referralRevenue).format('$0.0a')
    
    return(
        <Step>
            <Left
                title={'STEP 3 OF 3'}
                color={color}
                show={['Using your shops numbers entered above we are able to calculate the Total Lifetime Value of each of your customers.']}
                hidden={[
                    'In other words the total amount of potential revenue generated from each new customer over the timespan they remain a customer plus the addition of the important revenue generated from these customer referrals.'
                ]}
                theme={theme}
            />
            <Calculation
                color={color}
                title={'TOTAL LIFETIME VALUE'}
                tip={[
                    'Value of One Customer',
                    'plus (+)',
                    'Revenue From Referrals',
                    'equals (=)',
                    'Total Lifetime Value'
                ]}
                theme={theme}
            >
                <Slider
                    color={'#69B8EB'}
                    title={'Value of One Customer'}
                    total={numeral(aro * visits * years).format('$0,0')}
                    tip={[
                        'Calculated in Step 1',
                        'Yearly Value of Each Customer',
                        'multiplied by (x)',
                        'Average Number of Years You Keep a Customer'
                    ]}
                    theme={theme}
                />
                <Slider
                    color={'#00C25F'}
                    title={'Revenue from Referrals'}
                    total={numeral(aro * visits * years * referrals).format('$0,0')}
                    tip={[
                        'Calculated in Step 2',
                        'Value of One of Your Customers',
                        'multiplied by (x)',
                        'Average Number of Referrals Made by One Customer'
                    ]}
                    theme={theme}
                />
                <Total
                    color={color}
                    equation={`$${aro * visits * years} + ${formatReferrals} =`}
                    total={formatTotal}
                    tip={[
                        'Value of One Customer',
                        'plus (+)',
                        'Revenue From Referrals'
                    ]}
                    theme={theme}
                />
            </Calculation>
            <Right
                src={illustration}
                alt={'People sitting and standing beside huge piles of money'}
            />
        </Step>
)}