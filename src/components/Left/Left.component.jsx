import React, {useState} from 'react'

//import styles
import styles from './Left.module.css'

export default ({color, title, show, hidden, children}) => {
    const [showMore, setShowMore] = useState(false)
    return(
        <div className={styles.left}>
            <h3 style={{color}}>{title}</h3>
            {show.map((para, index) => <p key={`${index} ${title} 1`}>{para}</p>)}
            {showMore ?
                hidden.map((para, index) => <p key={`${index} ${title} 2`}>{para}</p>):
                undefined
            }
            {hidden ?
                <button
                    className={styles.readMore}
                    style={{background: color}}
                    onClick={() => setShowMore(!showMore)}
                >
                    Read {showMore ? 'Less' : 'More'}
                </button>:
                undefined
            }
            {children}
        </div>
    )
}