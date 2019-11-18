import React, {useState} from 'react'

//import styles
import styles from './MotionGraphic.module.css'

//import favicon
import favicon from '../../images/logo/favicon-white.svg'

export default ({color, theme, firstPosition, secondPosition, thirdPosition}) => {

    const lineStyles = {
        background: color
    }

    let borderStyle = {}
    if (theme) {
        borderStyle = {
            borderWidth:'2px',
            borderStyle: 'solid',
            borderColor: 'white'
        }
    } else {
        borderStyle = {
            borderWidth:'2px',
            borderStyle: 'solid',
            borderColor: '#002A42'
        }
    }

    //styles for positions on slider
    const positionStyle = [
        {
            left: '-15px',
            marginLeft: '0px',
            background: color
        },
        {
            left: '25%',
            marginLeft: '-15px',
            background: color
        },
        {
            left: '50%',
            marginLeft: '-15px',
            background: color
        },
        {
            left: '75%',
            marginLeft: '-15px',
            background: color
        },
        {
            left: 'calc(100% - 15px)',
            marginLeft: '0px',
            background: color
        }
    ]

    const overlayStyle = [
        {
            width: '0px',
            background: color
        },
        {
            width: '25%',
            background: color
        },
        {
            width: '50%',
            background: color
        },
        {
            width: '75%',
            background: color
        },
        {
            width: '100%',
            background: color
        }
    ]

    const [position, setPosition] = useState(firstPosition)
    const options = [0,1,2,3,4]

    return(
        <div className={styles.options}>
            <div className={styles.line} style={lineStyles}/>
            {/* <div className={styles.overlayLine} style={overlayStyle[position]}/>
            <div className={styles.touches}>
                {options.map((option, index) => 
                    <div 
                        className={styles.touch}
                        key={option}
                    >
                        <div className={styles.dot}/>
                    </div>
                )}
            </div>
            <div
                className={styles.tracker}
                style={{...positionStyle[position], ...borderStyle}}
            >
                    <img src={favicon} alt={'adjust slider'}/>
            </div> */}
        </div>
    )
}