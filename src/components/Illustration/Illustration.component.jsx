import React from 'react'

//import styles
import styles from './Illustration.module.css'

export default ({src, alt}) => (
    <div className={styles.illustration}>
        <img src={src} alt={alt}/>
    </div>
)