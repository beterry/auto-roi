import React from 'react'

//import styles
import styles from './Calculation.module.css'

export default ({color, title, children}) => {
    const style={
        border: `solid 2px ${color}`
    }
    return (
        <div
            className={styles.calculation}
            style={style}
        >
            <h2 className={styles.stepTitle}>{title}</h2>
            {children}
        </div>
    )
}