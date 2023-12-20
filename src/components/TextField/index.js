import "./TextField.css"

const TextField = ({ label, placeholder, onChange, required }) => {
    return (
        <div className="textField">
            <label>{label}</label>
            <input type="text" placeholder={`${placeholder}...`} onChange={(e) => onChange(e.target.value)} required={required}/>
        </div>
    )
}

export default TextField;