import React, {useState, useEffect} from 'react'

//import styles
import styles from './Slider.module.css'

//import triangle
import tipTriangle from '../../images/arrows/tip-triangle.svg'

const Slider = (
    {
        color,
        title,
        total,
        equation,
        options,
        onChange,
        tip,
        theme
    }
) => {
    const totalStyles = {
        color: color
    }

    const lineStyles = {
        background: color
    }

    const trackerStyles = {
        left: '50%',
        marginLeft: '-15px',
        background: color
    }

    const themeFont = {
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
        <div className={styles.slider}>
            <div className={styles.total}>
                <h3 style={theme ? themeFont.light : themeFont.dark}>{title}</h3>
                <h2
                    style={totalStyles}
                    onClick={toggleTip}
                >
                    {total}
                </h2>
                {equation ?
                    <p className={styles.equation} style={theme ? null : themeFont.dark}>{equation}</p>:
                    undefined
                }
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
            {options ? 
                <div className={styles.options}>
                    <div className={styles.line} style={lineStyles}/>
                    <div className={styles.touches}>
                        {options.map((option, index) => 
                            <div 
                                className={styles.touch}
                                key={option}
                                value={option}
                                onClick={(e) => onChange(e.target.getAttribute('value'))}
                            >
                                <div className={styles.dot} />
                            </div>
                        )}
                    </div>
                    <div className={styles.tracker} style={trackerStyles}/>
                </div>:
                null
            }
            
        </div>
    )
}

export default Slider