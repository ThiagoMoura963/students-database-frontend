import "./Courses.css";
import Card from "../Card";
import hexToRgba from "hex-to-rgba";

const Courses = ({ courses, color, registers, onDelete, onChangeColor, id }) => {
    return (  
        registers.length > 0 && <section className="courses" style={{ backgroundColor: hexToRgba(color, '0.6') }}>
            <input  
              className="courses__input-color"
              type="color"
              value={color} 
              onChange={(e) => onChangeColor(e.target.value, id)} 
            />
            <h3 style={{ borderColor: color }}>{courses}</h3>
            <div className="courses__card">
                {registers.map((register, index) => 
                    <Card 
                      key={index}
                      color={color}
                      onDelete={onDelete}
                      register={register}
                    />
                )}
            </div>
        </section>
    )
}

export default Courses;