import "./Card.css";

const Card = ({ image, name, course, age, cpf, registration, primaryColor }) => {
    return (
        <div className="card">
            <div className="card__header" style={{ backgroundColor: primaryColor }}>
                <img src={image} alt={name} />
            </div>
            <div className="card__footer">
                <h4>{name}</h4>
                <h5>{course}</h5>
                <div className="card__infos">
                    <p>Idade: {age}</p>
                    <p>CPF: {cpf}</p>
                    <p>Matrícula: {registration}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;