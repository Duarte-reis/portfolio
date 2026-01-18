import { useState } from "react"

function FlipText({ children, className = "", onClick, as: Component = "div", id }) {
  const [hasBeenHovered, setHasBeenHovered] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Component
      id={id}
      className={`flip_animation ${className} ${
        isHovered ? "hovered" : hasBeenHovered ? "unhover" : ""
      }`}
      onMouseEnter={() => {
        setIsHovered(true)
        setHasBeenHovered(true)
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </Component>
  )
}

export default FlipText
