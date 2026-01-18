import { useState } from "react"
import "../index.css"

function PlayBtn({ text, onClick, icon }) {

    const [hasBeenHovered, setHasBeenHovered] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div 
            className={`nav_btn ${isHovered ? 'hovered' : (hasBeenHovered ? 'unhover' : '')}`}
            onMouseEnter={() => {
                setIsHovered(true)
                setHasBeenHovered(true)
            }}
            onMouseLeave={() => {
                setIsHovered(false)
            }}
            onClick={onClick}
        >
            <p>{text}</p>
            <img src={icon} alt={`${text} icon`} />
        </div>
    )
}

export default PlayBtn