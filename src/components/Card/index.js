import { AiFillCloseCircle } from "react-icons/ai";

import "./Card.css";

const Card = ({ color, onDelete, register }) => {
    console.log(register.id);
    return (
        <div className="card" onClick={() => onDelete(register.registerId)}>
            <AiFillCloseCircle size={25} className="card__delete" />
            <div className="card__header" style={{ backgroundColor: color }}>
                <img src={register.image} alt={register.name} />
            </div>
            <div className="card__footer">
                <h4>{register.name}</h4>
                <h5>{register.course}</h5>
                <div className="card__infos">
                    <div>Id: {register.registerId}</div>
                    <p>Idade: {register.age}</p>
                    <p>CPF: {register.cpf}</p>
                    <p>Matrícula: {register.registration}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;