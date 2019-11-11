import React from 'react'

//import styles
import styles from './Footer.module.css'

//import images
import logo from '../../images/logo/MS_FullColor_2019.svg'

export default () => (
    <div className={styles.footer}>
        <p>Here at Mail Shark, we are passionate about helpinng small businesses, not only calculate, but iplement, the positive effects durect mail has in auto shops.</p>
        <p>Have any questions? Give us a ring or check out our website!</p>
        <button>EMAIL ME MY RESULTS</button>
        <img src={logo} alt={'Mail Shark logo'}/>
    </div>
)