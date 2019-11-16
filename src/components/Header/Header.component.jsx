import React from 'react'

//import styles
import styles from './Header.module.css'

//import images
import lightLogo from '../../images/logo/MS_FullColor_2019.svg'
import darkLogo from '../../images/logo/MS_White_2019.svg'

export default ({changeTheme, theme}) => (
    <div className={styles.header}>
        <img src={theme ? lightLogo : darkLogo} alt={'Mail Shark logo'}/>
        <div className={styles.matter}>
            <button
                className={styles.toggleTheme}
                onClick={() => changeTheme()}
            >Toggle Theme</button>
            <p className={theme ? 'light' : 'dark'}>999-999-9999</p>
        </div>
    </div>
)