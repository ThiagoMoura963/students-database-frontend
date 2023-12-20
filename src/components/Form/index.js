import "./Form.css"
import TextField from "../TextField";
import Button from "../Button";
import Dropbox from "../Dropbox";
import { useState } from "react";
import { v4 as id } from 'uuid';

const Form = ({ onRegister, courses, addCourse }) => {
    
    const registerId = id();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    // const [date, setDate] = useState("");
    const [age, setAge] = useState("");
    const [cpf, setCpf] = useState("");
    const [registration, setRegistration] = useState("");
    const [course, setCourse] = useState("");
    const [courseName, setCourseName] = useState("");
    const [courseColor, setCourseColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onRegister({
            registerId,
            name,
            image, 
            age,
            // date,
            cpf,
            course,
            registration
        })
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do aluno</h2>
                
                <TextField 
                  label="Nome" 
                  placeholder="Digite o seu nome"
                  required
                  value={name}
                  onChange={(value) => setName(value)}
                />
                <TextField 
                  label="Idade" 
                  placeholder="Digite a sua idade"
                  required
                  value={age}
                  onChange={(value) => setAge(value)}
                />
                <TextField 
                  label="Foto de perfil"
                  placeholder="Insira o link de uma foto"
                  required
                  value={image}
                  onChange={(value) => setImage(value)}
                />
                <TextField 
                  label="Matrícula"
                  placeholder="Digite o seu número de matrícula"
                  required
                  value={registration}
                  onChange={(value) => setRegistration(value)}
                />
                <TextField 
                  label="CPF" 
                  placeholder="Digite o seu CPF"
                  required
                  value={cpf}
                  onChange={(value) => setCpf(value)}
                />
                <Dropbox 
                  label="Curso" 
                  courses={courses}
                  required
                  value={course}
                  onChange={(value) => setCourse(value)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
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
                  placeholder="Digite a cor do curso"
                  required
                  value={courseColor}
                  onChange={(value) => setCourseColor(value)}
                />
                <Button>
                    Criar um novo curso
                </Button>
            </form>
        </section>
    )
}

export default Form;