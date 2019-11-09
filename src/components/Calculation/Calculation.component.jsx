import React from 'react'

//import styles
import styles from './Calculation.module.css'

export default (props) => (
    <div className={styles.calculation}>
        {props.children}
    </div>
)