import { useState } from "react"
import "../index.css"

function NavBtn({ text, onClick }) {

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
            <img src="/images/go_arrow.png" alt="arrow right" />
        </div>
    )
}

export default NavBtn