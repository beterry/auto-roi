import React from 'react'

//import styles
import styles from './Layout.module.css'

export default ({children, theme}) => {

    const themeStyle = {
        light: {
            background:'lightblue'
        },
        dark: {
            background:'#001E2F'
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