import React from 'react'

//import styles
import styles from './Right.module.css'

export default ({src, alt, children}) => {
    // styles based on props
    // if tips are in the right, space-between
    // else, sink illustration 
    let propStyles = {}
    if (children){
        propStyles = {justifyContent: 'space-between'}
    } else {
        propStyles = {justifyContent: 'flex-end'}
    }
    return(
        <div className={styles.right} style={propStyles}>
            {children}
            <img src={src} alt={alt}/>
        </div>
    )
}