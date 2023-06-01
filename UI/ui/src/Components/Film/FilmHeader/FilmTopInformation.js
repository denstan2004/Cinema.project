import React from "react";
import "./FilmTopInformation.css"
import axios from "axios";

const FilmTopInformation = (props) =>{

    const cardId = localStorage.getItem("cardId");
    const userId = localStorage.getItem("userId");
    const handleClick = () => {
        console.log(cardId, userId);
        axios.post(`http://localhost:8080/users/UserFilm`, {filmid: cardId, userid: userId}).then((res) => {
            console.log(res.data);
        })
        alert("Додано");
    }

    return ( <>
        <div className="film-top-information">
            <h1 className="film-title"> {props.Title} </h1>
            <h4 className="film-tags">Жанр: {props.Tags} </h4>
            <h5 className="film-director">Режисер: {props.Director} </h5>
            <h5 className="film-actors">Актори: {props.Actors} </h5>
            <h5 className="film-rating"> {props.Rating} </h5>
        </div>
        <div>
            <button type ="button" className="button" onClick={handleClick}>Додати до улюблених</button>
        </div>
    </>);
}

export default FilmTopInformation;