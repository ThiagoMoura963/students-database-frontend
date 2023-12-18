import "./TextField.css"

const TextField = ({ label, placeholder, onChange }) => {
    return (
        <div className="textField">
            <label>{label}</label>
            <input type="text" placeholder={`${placeholder}...`} onChange={(e) => onChange(e.target.value)}/>
        </div>
    )
}

export default TextField;