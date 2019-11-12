import React from 'react'

//import styles
import styles from './Tip.module.css'

export default ({color, title, children}) => {
    const propStyles = {
        color
    }
    return (
        <div className={styles.tip}>
            <h4 style={propStyles}>{title}</h4>
            {children}
        </div>
    )
}