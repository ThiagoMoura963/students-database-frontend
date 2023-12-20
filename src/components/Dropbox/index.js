import "./Dropbox.css";

const Dropbox = ({ label, courses, onChange }) => {


    return (
        <div className="dropbox">
            <label>{label}</label>
            <select onChange={(e) => onChange(e.target.value)}>
                <option value=""></option>
                {courses.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
      </div>
    );
  };
  

export default Dropbox;