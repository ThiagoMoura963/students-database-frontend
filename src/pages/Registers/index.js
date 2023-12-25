import Courses from "../../components/Courses";
import styles from "./Registers.module.css";

const Registers = ({ courses, handleDeleteRegister, registers, handleChangeColorCard, handleFavoriteRegister }) => {
    return (
        <>
            <section className={styles.registers}>
                <h1>Registros</h1>
                {courses.map((item, index) =>
                    <Courses
                        key={index}
                        courses={item.course}
                        id={item.id}
                        color={item.color}
                        registers={registers.filter(register => register.course === item.course)}
                        onDelete={handleDeleteRegister}
                        onChangeColor={handleChangeColorCard}
                        onFavorite={handleFavoriteRegister}
                    />
                )}
            </section>
            <div className={styles.whiteSpace}></div>
        </>
    )
}

export default Registers;