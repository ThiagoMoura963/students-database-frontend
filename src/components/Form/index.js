import "./Form.css"
import TextField from "../TextField";
import Button from "../Button";

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do aluno</h2>
                
                <TextField label="Nome" placeholder="Digite o seu nome"/>
                <TextField label="Idade" placeholder="Digite a sua idade"/>
                <TextField label="Data de nascimento" placeholder="Digite a sua data de nascimento"/>
                <TextField label="CPF" placeholder="Digite o seu CPF"/>
                <TextField label="Curso" placeholder="Digite o seu curso"/>
            
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form;