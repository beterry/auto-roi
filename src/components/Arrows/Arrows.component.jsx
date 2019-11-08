import React from 'react'

//import styles
import styles from './Arrows.module.css'

//import images
import arrows from '../../images/arrows/arrows.png'

export default () => (
    <div className={styles.arrows}>
        <img src={arrows} alt={'Sroll indicator'} />
    </div>
)