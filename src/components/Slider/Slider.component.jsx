import React, {useState, useEffect, useRef} from 'react'

//import styles
import styles from './Slider.module.css'

//import triangle
import tipTriangle from '../../images/arrows/tip-triangle.svg'
import favicon from '../../images/logo/favicon-white.svg'

const Slider = (
    //props
    {
        color,
        title,
        total,
        equation,
        options,
        onChange,
        tip,
        theme,
        initPosition=2
    }
    //component function
) => {
    //state
    const [position, setPosition] = useState(initPosition)
    const [showTip, setShowTip] = useState(false)
    const [range, setRange] = useState({min: null, max: null})
    const [positionX, setpositionX] = useState(null)

    const totalStyles = {
        color: color
    }

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

    const themeFont = {
        light: {
            color: '#002A42'
        },
        dark: {
            color: 'white'
        }
    }
    
    
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

    

    const handleTouch = (e) => {
        onChange(e.target.getAttribute('value'))
        setPosition(e.target.getAttribute('index'))
    }

    const sliderRef = useRef(null)
    
    const handleTouchStart = (e) => {
        //calcualte coordinates
        const initialTouch = e.touches[0].clientX
        //calcualte range
        const sliderWidth = sliderRef.current.clientWidth
        //set range state
        const sliderSection = sliderWidth / 4
        const rangeMin = initialTouch - (sliderSection * position)
        const rangeMax = initialTouch + (sliderSection * (4 - position))
        setRange({min: rangeMin, max: rangeMax})
    }

    const handleTouchMove = (e) => {
        //calculate coordinates
        const touch = e.touches[0].clientX
        //set positionX state
        const sliderPosition = Math.floor(((touch - range.min) * 100) / (range.max - range.min))
        setpositionX(sliderPosition)
    }

    const handleTouchEnd = (e) => {
        //which option are we closest to?
        console.log(positionX)
        if (positionX <= 12){
            onChange(options[0])
            setPosition(0)
        }
        if (positionX > 12 && positionX <= 36){
            onChange(options[1])
            setPosition(1)
        }
        if (positionX > 36 && positionX <= 61){
            onChange(options[2])
            setPosition(2)
        }
        if (positionX > 61 && positionX <= 85){
            onChange(options[3])
            setPosition(3)
        }
        if (positionX >= 85){
            onChange(options[4])
            setPosition(4)
        }
    }

    //render
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
                <div className={styles.options} ref={sliderRef}>
                    <div className={styles.line} style={lineStyles}/>
                    <div className={styles.overlayLine} style={{...overlayStyle[position]}}/>
                    <div className={styles.touches} >
                        {options.map((option, index) => 
                            <div 
                                className={styles.touch}
                                key={option}
                                value={option}
                                index={index}
                                onClick={(e) => handleTouch(e)}
                            >
                                <div className={styles.dot} index={index} value={option}/>
                            </div>
                        )}
                    </div>
                    <div
                        className={styles.tracker}
                        style={{...positionStyle[position], ...borderStyle}}
                        onTouchStart={(e) => handleTouchStart(e)}
                        onTouchMove={(e) => handleTouchMove(e)}
                        onTouchEnd={(e) => handleTouchEnd(e)}
                    >
                            <img src={favicon} alt={'adjust slider'} draggable={false}/>
                    </div>
                </div>:
                null
            }
            
        </div>
    )
}

export default Slider