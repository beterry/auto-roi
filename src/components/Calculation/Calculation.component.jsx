import React, {useState, useEffect} from 'react'

//import styles
import styles from './Calculation.module.css'

//import images
import tooltip from '../../images/tooltips/tooltip.svg'
import tipTriangle from '../../images/arrows/tip-triangle.svg'

export default ({color, title, children, tip}) => {
    const style={
        border: `solid 2px ${color}`
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

    return (
        <div
            className={styles.calculation}
            style={style}
        >
            <div className={styles.title}>
                <h2>{title}</h2>
                <img
                    src={tooltip}
                    alt={'Click for more information'}
                    onClick={toggleTip}
                    className={styles.questionMark}
                />
                {tip && showTip ? 
                    <img className={styles.triangle} src={tipTriangle} alt='' />:
                    undefined
                }
                {tip && showTip ?
                    <div className={styles.tip}>
                        {tip.map((line, index) => <p key={`${index} ${line}`}>{line}</p>)}
                    </div> :
                    undefined
                }
            </div>
            {children}
        </div>
    )
}