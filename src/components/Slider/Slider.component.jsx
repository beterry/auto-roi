import React from 'react'

//import styles
import styles from './Slider.module.css'

const Slider = ({color, title, total, options=[], onChange}) => {
    const totalStyles = {
        color: color
    }
    return (
        <div className={styles.slider}>
            <div className={styles.total}>
                <h3>{title}</h3>
                <h2 style={totalStyles}>{total}</h2>
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