import "./Text.css"

const TextField = ({ type='text', label, placeholder, onChange, required }) => {
    return (
        <div className={`text text-${type}`}>
            <label>{label}</label>
            <input 
              type={type} 
              placeholder={`${placeholder}...`} onChange={(e) => onChange(e.target.value)} 
              required={required}
            />
        </div>
    )
}

export default TextField;