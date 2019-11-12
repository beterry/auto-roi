import React from 'react'

//import styles
import styles from './Arrows.module.css'

//import images
import arrows from '../../images/arrows/arrows.svg'

export default () => (
    <div className={styles.arrows}>
        <img src={arrows} alt={'Sroll indicator'} />
    </div>
)