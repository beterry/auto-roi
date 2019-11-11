import React from 'react'

//import styles
import styles from './Intro.module.css'

//import images
import sliders from '../../images/illustrations/sliders.svg'

export default () => (
    <div className={styles.intro}>
        <div className={styles.copy}>
            <h2>Auto Repair Direct Mail</h2>
            <h1>ROI CALCULATOR</h1>
            <p>The purpose of this calculator is to help you better understand how the true value of your new customers as well as how to calculate the short term and long term ROI of your direct mail marketing campaigns.</p>
            <p>If your haven't already done so, please read our <a href={'www.themailshark.com'}>ROI article</a>. This will give you the best understanding as to the methodology used as well as a full explanation of what these number mean and why they are used.</p>
        </div>
        <div className={styles.sliderImage}>
            <img src={sliders} alt={'Calculator sliders'}/>
        </div>
    </div>
)