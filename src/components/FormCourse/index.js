import TextField from "../Text";
import "../FormStudent/FormStudent.css";
import Button from "../Button";
import { useState } from "react";

const FormCourse = ({ addCourse }) => {
    const [courseName, setCourseName] = useState("");
    const [courseColor, setCourseColor] = useState("");

    return (
        <section className="form">
            <form onSubmit={(e) => {
                e.preventDefault();
                addCourse({ course: courseName, color: courseColor })
            }}>
                <h2>Preencha os dados para cadastrar um novo curso</h2>

                <TextField
                    label="Nome"
                    placeholder="Digite o nome do curso"
                    required
                    value={courseName}
                    onChange={(value) => setCourseName(value)}
                />
                <TextField
                    label="Cor"
                    type="color"
                    placeholder="Digite a cor do curso"
                    required
                    value={courseColor}
                    onChange={(value) => setCourseColor(value)}
                />
                <Button>
                    Criar novo curso
                </Button>
            </form>
        </section>
    )
}

export default FormCourse;