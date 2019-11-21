import React from 'react'

//import styles
import styles from './Header.module.css'

//import images
import lightLogo from '../../images/logo/MS_FullColor_2019.svg'
import darkLogo from '../../images/logo/MS_White_2019.svg'
import sun from '../../images/toggle/sun.svg'
import moon from '../../images/toggle/moon.svg'

export default ({changeTheme, theme}) => {
    const buttonStyles = {
        light: {
            background: '#002A42'
        },
        dark: {
            background: '#FF8C00'
        }
    }
    return(
        <div className={styles.header}>
            <img style={{width: '150px'}} src={theme ? lightLogo : darkLogo} alt={'Mail Shark logo'}/>
            <div className={styles.matter}>
                <button
                    className={styles.toggleTheme}
                    style={theme ? buttonStyles.light : buttonStyles.dark}
                    onClick={() => changeTheme()}
                >
                    <img src={theme ? moon : sun} alt={'toggle theme'}/>
                </button>
                <p className={theme ? 'light' : 'dark'}>999-999-9999</p>
            </div>
        </div>
    )
}