import React from 'react'

//import styles
import styles from './Step.module.css'

//import components


const Step = (props) => {
    return (
        <div className={styles.step}>
            {props.children}
        </div>
    )
}

export default Step