import { AiFillCloseCircle } from "react-icons/ai";

import "./Card.css";

const Card = ({ image, name, course, age, cpf, registration, color, onDelete }) => {
    return (
        <div className="card" onClick={onDelete}>
            <AiFillCloseCircle size={25} className="card__delete" />
            <div className="card__header" style={{ backgroundColor: color }}>
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