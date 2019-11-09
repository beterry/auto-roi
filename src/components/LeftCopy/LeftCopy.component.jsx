import React from 'react'

//import styles
import styles from './LeftCopy.module.css'

export default ({color, title, children}) => (
    <div className={styles.leftCopy}>
        <h3 style={{color}}>{title}</h3>
        {children}
    </div>
)