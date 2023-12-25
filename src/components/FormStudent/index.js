import "./FormStudent.css"
import TextField from "../Text";
import Button from "../Button";
import Dropbox from "../Dropbox";
import { useState } from "react";
import { v4 as id } from 'uuid';
import { toast } from 'react-toastify';

const FormStudent = ({ onRegister, courses, addCourse }) => {
  const registerId = id();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  // const [date, setDate] = useState("");
  const [age, setAge] = useState("");
  const [cpf, setCpf] = useState("");
  const [registration, setRegistration] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({
      favorite: false,
      registerId,
      name,
      image,
      age,
      cpf,
      course,
      registration
    })

    toast.success("Registro criado com sucesso!");
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
    </section>
  )
}

export default FormStudent;