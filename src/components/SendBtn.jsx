import { useState } from "react"
import "../index.css"

function SendBtn({ text, onClick, disabled, showCheckmark }) {
    const [hasBeenHovered, setHasBeenHovered] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div 
            className={`send_btn ${!isHovered && hasBeenHovered ? 'unhover' : ''} ${disabled ? 'disabled' : ''}`}
            onClick={disabled ? undefined : onClick}
            onMouseEnter={() => {
                if (!disabled) {
                    setIsHovered(true)
                    setHasBeenHovered(true)
                }
            }}
            onMouseLeave={() => {
                setIsHovered(false)
            }}
        >
            <p>{text}</p>
            {showCheckmark ? (
                <img src="/images/check-mark-btn.png" alt="confirmed" />
            ) : (
                <img src="/images/go_arrow.png" alt="arrow right" />
            )}
        </div>
    )
}

export default SendBtn