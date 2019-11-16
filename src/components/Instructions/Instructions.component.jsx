import React from 'react'

//import styles
import styles from './Instructions.module.css'

//import images
import blueCar from '../../images/illustrations/car-blue.svg'
import redCar from '../../images/illustrations/car-red.svg'

export default ({activateCalc, theme}) => (
    <div className={styles.instructions}>
        <h3>Instructions</h3>
        <p
            className={theme ? null : 'dark'}
        >
            Before we start, in order to better calculate your default values, please select which option best describes your shop:
        </p>
        <div className={styles.buttons}>
            <img src={redCar} alt={'Red car'} />
            <button
                className={theme ? styles.lightButton : styles.darkButton}
                onClick={()=>activateCalc('general')}
            >
                GENERAL SHOP
            </button>
            <p className={theme ? 'light' : 'dark'}>or</p>
            <button
                className={theme ? styles.lightButton : styles.darkButton}
                onClick={()=>console.log('Specialty Shop')}
            >
                SPECIALTY SHOP
            </button>
            <img src={blueCar} alt={'Blue car'} />
        </div>
    </div>
)