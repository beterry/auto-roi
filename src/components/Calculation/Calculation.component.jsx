import React, {useState, useEffect} from 'react'

//import styles
import styles from './Calculation.module.css'

//import images
import lightTooltip from '../../images/tooltips/tooltip.svg'
import darkTooltip from '../../images/tooltips/tooltip-white.svg'
import tipTriangle from '../../images/arrows/tip-triangle.svg'

export default ({color, title, children, tip, theme}) => {
    const themeStyle= {
        light: {
            outline: `solid 2px ${color}`,
            background: 'white'
        },
        dark: {
            background: '#002A42'
        }
        
    }
    const themeFont= {
        light: {
            color: '#002A42'
        },
        dark: {
            color: 'white'
        }
        
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
            style={theme ? themeStyle.light : themeStyle.dark}
        >
            <div className={styles.title}>
                <h2 style={theme ? themeFont.light : themeFont.dark}>{title}</h2>
                <img
                    src={theme ? lightTooltip : darkTooltip}
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