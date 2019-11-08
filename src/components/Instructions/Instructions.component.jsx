import React from 'react'

//import styles
import styles from './Instructions.module.css'

//import images
import blueCar from '../../images/instructions/car-blue.png'
import redCar from '../../images/instructions/car-red.png'

export default () => (
    <div className={styles.instructions}>
        <h3>Instructions</h3>
        <p>Before we start, in order to better calculate your default values, please select which option best describes your shop:</p>
        <div className={styles.buttons}>
            <img src={redCar} alt={'Red car'} />
            <button
                className={styles.chooseButton}
                onClick={()=>console.log('General Shop')}
            >GENERAL SHOP</button>
            <p>or</p>
            <button
                className={styles.chooseButton}
                onClick={()=>console.log('Specialty Shop')}
            >SPECIALTY SHOP</button>
            <img src={blueCar} alt={'Blue car'} />
        </div>
    </div>
)