import React from "react";
import "./FilmDescription.css"
const FilmDescription = (props) =>{
    return (
        <div className="film-description">
            <p> {props.Description} </p>
        </div>
    );

}

export default FilmDescription;