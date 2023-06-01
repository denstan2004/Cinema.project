import React from 'react';
import CardHeader from './CardHeader.js';
import './Card.css';
import { Link, useNavigate } from "react-router-dom";


const Card = (props) => {
    let navigate = useNavigate();
    function handleClick() {
        localStorage.setItem('cardId', props.Id);
        navigate('/Film');
    }
    return (
        <div className='card-container' onClick={handleClick}>
            <img className="card-image" src={props.Image} alt="GameImage" />
            <CardHeader Name={props.Name} Director={props.Director} Ganre={props.Ganre}  Rating={props.Rating}/>
        </div>);
}

export default Card;
