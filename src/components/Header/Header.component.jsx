import React from 'react'

//import styles
import styles from './Header.module.css'

//import images
import logo from '../../images/logo/MS_FullColor_2019.svg'

export default ({changeTheme}) => (
    <div className={styles.header}>
        <img src={logo} alt={'Mail Shark logo'}/>
        <div className={styles.matter}>
            <button
                className={styles.toggleTheme}
                onClick={() => changeTheme()}
            >Toggle Theme</button>
            <p>999-999-9999</p>
        </div>
    </div>
)