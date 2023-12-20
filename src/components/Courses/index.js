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
            <h3>{courses}</h3>
            <div className="courses__card">
                {registers.map(register => 
                    <Card 
                      key={register.course}
                      course={register.course}
                      name={register.name}
                      image={register.image}
                      cpf={register.cpf}
                      age={register.age}
                      registration={register.registration}
                      color={color}
                      onDelete={onDelete}
                      onChangeColor={onChangeColor}
                    />
                )}
            </div>
        </section>
    )
}

export default Courses;