import "../index.css"

function Tag({text}) {
    return (
        <div className="tag">
            <svg className="circle_svg" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" />
            </svg>
            <p>{text}</p>
        </div>
    )
}

export default Tag