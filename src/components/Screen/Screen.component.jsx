import React from 'react'

//import styles
import styles from './Screen.module.css'

export default (props) => (
    <div className={styles.screen}>
        {props.children}
    </div>
)