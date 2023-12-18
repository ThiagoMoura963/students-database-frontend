import "./Courses.css";
import Card from "../Card";

const Courses = ({ courses, primaryColor, secundaryColor, registers }) => {
    return (
        registers.length > 0 && <section className="courses" style={{ backgroundColor: secundaryColor }}>
            <h3 style={{ color: primaryColor }}>{courses}</h3>
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
                      primaryColor={primaryColor}
                    />
                )}
            </div>
        </section>
    )
}

export default Courses;