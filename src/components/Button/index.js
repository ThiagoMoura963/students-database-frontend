import "./Button.css"

const Button = ({ children }) => {
    return (
        <div className="container">
            <button className="container__button">
                {children}
            </button>
        </div>
    )
}

export default Button;