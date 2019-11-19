import React from 'react'

//import styles
import styles from './Layout.module.css'

export default ({children, theme}) => {

    const themeStyle = {
        light: {
            background:'white',
            overflow: 'hidden'
        },
        dark: {
            background:'#001E2F',
            overflow: 'hidden'
        }
    }

    return (
        <div style={theme ? themeStyle.light : themeStyle.dark}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}