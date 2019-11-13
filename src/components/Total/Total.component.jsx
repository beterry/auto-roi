import React, {useState} from 'react'

//import styles
import styles from './Total.module.css'

//import triangle
import tipTriangle from '../../images/arrows/tip-triangle.svg'

export default ({color, equation, total, tip}) => {
    const propStyle = {
        color
    }
    const [showTip, setShowTip] = useState(false)
    const handleClickTotal = () => {
        setShowTip(!showTip)
    }
    return (
        <div className={styles.total}>
            <h3 style={propStyle}>{equation}</h3>
            <h2
                style={propStyle}
                onClick={handleClickTotal}
            >
                {total}
            </h2>
            {tip && showTip ? 
                <img className={styles.triangle} src={tipTriangle} alt='' />:
                undefined
            }
            {tip && showTip ?
                <div className={styles.tip}>
                    {tip.map((line) => <p>{line}</p>)}
                </div> :
                undefined
            }
        </div>
    )
}