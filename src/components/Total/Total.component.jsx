import React from 'react'

//import styles
import styles from './Total.module.css'

export default ({color, equation, total}) => {
    const propStyle = {
        color
    }
    return (
        <div className={styles.total}>
            <h3 style={propStyle}>{equation}</h3>
            <h2 style={propStyle}>{total}</h2>
        </div>
    )
}