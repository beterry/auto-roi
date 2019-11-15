import React, {useState, useEffect} from 'react'

//import styles
import styles from './Slider.module.css'

//import triangle
import tipTriangle from '../../images/arrows/tip-triangle.svg'

const Slider = ({color, title, total, options=[], onChange, tip}) => {
    const totalStyles = {
        color: color
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
        <div className={styles.slider}>
            <div className={styles.total}>
                <h3>{title}</h3>
                <h2
                    style={totalStyles}
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
                        {tip.map((line, index) => <p key={`${index} ${line}`}>{line}</p>)}
                    </div> :
                    undefined
                }
            </div>
            <div className={styles.options}>
                {options.map((option, index) => 
                    <button
                        key={option}
                        onClick={(e) => onChange(e.target.innerHTML)}
                    >
                        {option}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Slider