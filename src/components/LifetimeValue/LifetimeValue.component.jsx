import React from 'react'

//import styles

//import components
import Step from '../Step/Step.component'
import Left from '../Left/Left.component'
import Calculation from '../Calculation/Calculation.component'
import Right from '../Right/Right.component'
import Tip from '../Tip/Tip.component'
import Slider from '../Slider/Slider.component'
import Total from '../Total/Total.component'

//import images
import small from '../../images/illustrations/money-small-whole.svg'
import medium from '../../images/illustrations/money-medium-whole.svg'
import large from '../../images/illustrations/money-large-whole.svg'

//import numeral
import numeral from 'numeral'

export default (
    {
        color,
        aro,
        visits,
        years,
        onChangeAro,
        onChangeVisits,
        onChangeYears,
        theme
    }
) => {
    // determine what illustration should be displayed
    let total = aro * visits * years
    let illustration
    if (total < 1800){
        illustration = small
    } else if (total >= 1800 && total < 5731){
        illustration = medium
    } else{
        illustration = large
    }
    
    //format numbers
    let formatTotal = numeral(total).format('$0,0')

    return(
        <Step>
            <Left
                title={'STEP 1 OF 3'}
                color={color}
                show={['We start by uncovering the real value of each new customer you acquire.']}
                hidden={[
                    'It’s important you do not value your new customers solely on the amount spent on their first repair order or you will be overlooking the important, ongoing revenue from future repair orders that can only come over time.',
                    'Therefore, it’s critical we identify and assign the real value and revenue that each customer spends over the time they remain a customer at your shop AKA Lifetime Value of a Customer.'
                    ]}
                    theme={theme}
            />
            <Calculation
                color={color}
                title={'TOTAL LIFETIME VALUE OF ONE CUSTOMER'}
                tip={[
                    'Average Repair Order (ARO)',
                    'multiplied by (x)',
                    'Number of Visits A Customer Makes Per Year',
                    'multiplied by (x)',
                    'Average Number of Years You Keep a Customer',
                    'equals (=)',
                    'Value of One Customer'
                ]}
                theme={theme}
            >
                <Slider
                    color={color}
                    title={'Average Repair Order (ARO)'}
                    total={numeral(aro).format('$0,0')}
                    options={[100, 300, 573, 750, 1000]}
                    onChange={onChangeAro}
                    tip={[
                        'How much does your average customer spend each time they visit your shop?'
                    ]}
                    theme={theme}
                />
                <Slider
                    color={color}
                    title={'Number of Visits a Customer Makes Per Year'}
                    total={visits}
                    options={[1, 2, 3, 5, 10]}
                    onChange={onChangeVisits}
                    tip={[
                        'How many times does an average customer visit your shop per year?'
                    ]}
                    theme={theme}
                    initPosition={1}
                />
                <Slider
                    color={color}
                    title={'Yearly Value of Each Customer'}
                    total={numeral(aro * visits).format('$0,0')}
                    equation={numeral(aro).format('$0,0')+' x '+visits}
                    tip={[
                        'Average Repair Order (ARO)',
                        'multiplied by (x)',
                        'Number of Visits A Customer Makes Per Year'
                    ]}
                    theme={theme}
                />
                <Slider
                    color={color}
                    title={'Average Number of Years You Keep A Customer'}
                    total={years}
                    options={[1, 3, 5, 10, 20]}
                    onChange={onChangeYears}
                    tip={[
                        'For how many years does a customer continue to use your shop?'
                    ]}
                    theme={theme}
                />
                <Total
                    color={color}
                    equation={`$${aro * visits} x ${years} =`}
                    total={formatTotal}
                    tip={[
                        'Yearly Value of Each Customer',
                        'multiplied by (x)',
                        'Average Number of Years You Keep a Customer'
                    ]}
                    theme={theme}
                />
            </Calculation>
            <Right
                src={illustration}
                alt={'Person standing in front of large piles of money'}
            >
                <Tip
                        color={color}
                        title={`Here's a Tip!`}
                        theme={theme}
                    >
                        <p className={theme ? 'light' : 'dark'}>
                            Tap on any number to get an in-depth description or simply select the “?” icon.
                        </p>
                </Tip>
            </Right>
        </Step>
    )
}