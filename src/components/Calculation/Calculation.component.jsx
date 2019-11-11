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
            <div className={styles.title}>
                <h2>{title}</h2>
            </div>
            {children}
        </div>
    )
}