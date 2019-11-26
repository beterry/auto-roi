import React, {useState} from 'react'

//import styles
import styles from './Instructions.module.css'

//import images
import blueCar from '../../images/illustrations/car-blue.svg'
import redCar from '../../images/illustrations/car-red.svg'

export default ({activateCalc, theme, showCalc}) => {

    //set states
    const [redHovered, setRedHovered] = useState(false)
    const [blueHovered, setBlueHovered] = useState(false)

    const onRedHover = () => {
        setRedHovered(true)
    }

    const onBlueHover = () => {
        setBlueHovered(true)
    }

    const onRedHoverOut = () => {
        setRedHovered(false)
    }

    const onBlueHoverOut = () => {
        setBlueHovered(false)
    }

    const getRedPosition = () => {
        if (showCalc === 'general') {
            return ({left: '-120px'})
        } else if (redHovered) {
            return ({left: '-70px'})
        } else {
            return ({left: '0'})
        }
    }

    const getBluePosition = () => {
        if (showCalc === 'specialty') {
            return ({right: '-120px'})
        } else if (blueHovered) {
            return ({right: '-70px'})
        } else {
            return ({right: '0'})
        }
    }

    const getUnselctedColor = () => {
        if (theme) {
            return '#e9e9e9'
        } else {
            return '#002A42'
        }
    }

    const handleSelection = (selection) => {
        activateCalc(selection)
    }

    return (
        <div className={styles.instructions}>
            <h3>Instructions</h3>
            <p
                className={theme ? null : 'dark'}
            >
                Before we start, in order to better calculate your default values, please select which option best describes your shop:
            </p>
            <div className={styles.buttons}>
                <img
                    src={redCar}
                    alt={'Red car'}
                    style={getRedPosition()}
                />
                <button
                    className={theme ? styles.lightButton : styles.darkButton}
                    onClick={()=>handleSelection('general')}
                    style={{background: showCalc === 'specialty' ? getUnselctedColor() : null}}
                    onMouseEnter={onRedHover}
                    onMouseOut={onRedHoverOut}
                >
                    GENERAL SHOP
                </button>
                <p
                    className={theme ? 'light' : 'dark'}
                    style={{opacity: showCalc ? '.25' : '1'}}
                >
                    or
                </p>
                <button
                    className={theme ? styles.lightButton : styles.darkButton}
                    onClick={()=>handleSelection('specialty')}
                    style={{background: showCalc === 'general' ? getUnselctedColor() : null}}
                    onMouseEnter={onBlueHover}
                    onMouseOut={onBlueHoverOut}
                >
                    SPECIALTY SHOP
                </button>
                <img
                    src={blueCar}
                    alt={'Blue car'}
                    style={getBluePosition()}
                />
            </div>
        </div>
    )
}