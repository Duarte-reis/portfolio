import { useState } from "react"

function Colorway({ children, className = "", onClick }) {
    const [hasBeenHovered, setHasBeenHovered] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    // Divide o texto em spans
    const textToSpans = (text) => {
        return text.split('').map((char, index) => (
            <span key={index}>{char}</span>
        ))
    }

    return (
        <p
            className={`colorway ${className} ${isHovered ? 'hovered' : (hasBeenHovered ? 'unhover' : '')}`}
            onMouseEnter={() => {
                setIsHovered(true)
                setHasBeenHovered(true)
            }}
            onMouseLeave={() => {
                setIsHovered(false)
            }}
            onClick={onClick}
        >
            {textToSpans(children)}
        </p>
    )
}

export default Colorway