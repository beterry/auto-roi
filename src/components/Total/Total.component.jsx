import React, {useState, useEffect} from 'react'

//import styles
import styles from './Total.module.css'

//import triangle
import tipTriangle from '../../images/arrows/tip-triangle.svg'

export default ({color, equation, total, tip}) => {
    const propStyle = {
        color
    }
    const [showTip, setShowTip] = useState(false)
    const toggleTip = () => {
        setShowTip(!showTip)
    }

    const closeTip = () => {
        setShowTip(false)
    }

    useEffect(() => {
        if (showTip){
            document.addEventListener('click', closeTip)
        }
        return () => {
            document.removeEventListener('click', closeTip)
        }
    }, [showTip])

    const isOperation = (firstWord) => {
        if (
            firstWord === 'multiplied' ||
            firstWord === 'calculated' ||
            firstWord === 'plus' ||
            firstWord === 'equals' ||
            firstWord === 'minus' ||
            firstWord === 'divided' ||
            firstWord === 'specified' ||
            firstWord === 'subtracted'
        ){
            return true
        } else {
            return false
        }
    }

    return (
        <div className={styles.total}>
            <h3 style={propStyle}>{equation}</h3>
            <h2
                style={propStyle}
                onClick={toggleTip}
            >
                {total}
            </h2>
            {tip && showTip ? 
                <img className={styles.triangle} src={tipTriangle} alt='' />:
                undefined
            }
            {tip && showTip ?
                <div className={styles.tip}>
                    {tip.map((line, index) => 
                        <p
                            key={`${line} ${index}`}
                            className={isOperation(line.split(' ')[0].toLowerCase()) ? styles.bold : null}
                        >
                            {line}
                        </p>)
                    }
                </div> :
                undefined
            }
        </div>
    )
}