import React from 'react'

//import styles
import styles from './Layout.module.css'

export default (props) => (
    <div className={styles.container}>
        {props.children}
    </div>
)