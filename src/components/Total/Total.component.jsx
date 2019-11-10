import React from 'react'

//import styles
import styles from './Total.module.css'

export default ({equation, total}) => (
    <div className={styles.total}>
        <h3>{equation}</h3>
        <h2>{total}</h2>
    </div>
)