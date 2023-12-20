import "./Form.css"
import TextField from "../TextField";
import Button from "../Button";
import Dropbox from "../Dropbox";
import { useState } from "react";

const Form = ({ onRegister, courses }) => {
    // const courses = [
    //     "Análise e Desenvolvimento de Sistemas",
    //     "Recursos Humanos",
    //     "Psicologia",
    //     "Engenharia Elétrica",
    //     "Logistíca",
    //     "Sistemas para Internet"
    // ];

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    // const [date, setDate] = useState("");
    const [age, setAge] = useState("");
    const [cpf, setCpf] = useState("");
    const [registration, setRegistration] = useState("");
    const[course, setCourse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onRegister({
            name,
            image, 
            age,
            // date,
            cpf,
            course,
            registration
        })

        setName('');
        setAge('');
        setImage('');
        setCpf('');
        setRegistration('');
        setCourse('');
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do aluno</h2>
                
                <TextField 
                  label="Nome" 
                  placeholder="Digite o seu nome"
                  required={true}
                  value={name}
                  onChange={(value) => setName(value)}
                />
                <TextField 
                  label="Idade" 
                  placeholder="Digite a sua idade"
                  required={true}
                  value={age}
                  onChange={(value) => setAge(value)}
                />
                <TextField 
                  label="Foto de perfil"
                  placeholder="Insira o link de uma foto"
                  required={true}
                  value={image}
                  onChange={(value) => setImage(value)}
                />
                {/* <TextField 
                  label="Data de nascimento" 
                  placeholder="Digite a sua data de nascimento"
                  onChange={(value) => setDate(value)}
                /> */}
                <TextField 
                  label="Matrícula"
                  placeholder="Digite o seu número de matrícula"
                  required={true}
                  value={registration}
                  onChange={(value) => setRegistration(value)}
                />
                <TextField 
                  label="CPF" 
                  placeholder="Digite o seu CPF"
                  required={true}
                  value={cpf}
                  onChange={(value) => setCpf(value)}
                />
                <Dropbox 
                  label="Curso" 
                  courses={courses}
                  required={true}
                  value={course}
                  onChange={(value) => setCourse(value)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form;