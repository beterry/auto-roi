import React from 'react'

//import styles
import styles from './Part.module.css'

export default ({partNumber, title, theme}) => {
    const fontStyles = {
        light: {
            color: "#002A42"
        },
        dark: {
            color: "white"
        }
    }
    return(
        <div className={styles.part}>
            <h2 style={theme ? fontStyles.light : fontStyles.dark} >Part {partNumber}</h2>
            <h2 style={theme ? fontStyles.light : fontStyles.dark} >{title}</h2>
        </div>
    )
}