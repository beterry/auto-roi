import React from 'react'

//import styles
import styles from './Footer.module.css'

//import images
import lightLogo from '../../images/logo/MS_FullColor_2019.svg'
import darkLogo from '../../images/logo/MS_White_2019.svg'

export default ({theme}) => (
    <div className={styles.footer}>
        <p className={theme ? 'light' : 'dark'}>Here at Mail Shark, we are passionate about helpinng small businesses, not only calculate, but iplement, the positive effects durect mail has in auto shops.</p>
        <p className={theme ? 'light' : 'dark'}>Have any questions? Give us a ring or check out our website!</p>
        <button>EMAIL ME MY RESULTS</button>
        <img src={theme ? lightLogo : darkLogo} alt={'Mail Shark logo'}/>
    </div>
)