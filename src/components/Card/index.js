import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart  } from "react-icons/ai";

import "./Card.css";

const Card = ({ color, onDelete, register, onFavorite }) => {

    const favorite = () => {
        onFavorite(register.registerId);
    }

    const propsFavorite = {
        onClick: favorite,
        size: 25,
        style: {
            cursor: 'pointer'
        }
    }
    return (
        <div className="card">
            <AiFillCloseCircle size={25} 
                className="card__delete" 
                onClick={() => onDelete(register.registerId)}
            />
            <div className="card__header" style={{ backgroundColor: color }}>
                <img src={register.image} alt={register.name} />
            </div>
            <div className="card__footer">
                <h4>{register.name}</h4>
                <h5>{register.course}</h5>
                <div className="card__infos">
                    <p>Idade: {register.age}</p>
                    <p>CPF: {register.cpf}</p>
                    <p>Matrícula: {register.registration}</p>
                </div>
                <div className="card__favorite">
                    {register.favorite 
                        ? <AiFillHeart {...propsFavorite} color="#FF0000" />  
                        : <AiOutlineHeart {...propsFavorite} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;