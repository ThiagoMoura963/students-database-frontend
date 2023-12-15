import "./TextField.css"

const TextField = ({ label, placeholder }) => {
    return (
        <div className="textField">
            <label>{label}</label>
            <input type="text" placeholder={`${placeholder}...`}/>
        </div>
    )
}

export default TextField;