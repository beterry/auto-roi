import React from 'react'

//import styles
import styles from './Slider.module.css'

const Slider = ({title, total, options, onChange}) => {
    return (
        <div>
            <div className={styles.total}>
                <h3>{title}</h3>
                <h2>{total}</h2>
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