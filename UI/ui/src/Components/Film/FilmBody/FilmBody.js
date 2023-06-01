import React from "react";

import FilmDescription from "./FilmDescription.js";
import "./FilmBody.css";

const FilmBody = (props) => {
    const trailer = props.Trailer === null ? "https://www.youtube.com/embed/dQw4w9WgXcQ" : props.Trailer;
    return (
        
        <div className="film-body">
            <h1>Опис</h1>
            <div className="film-trailer">
                <iframe src={trailer} title="Film Trailer" allowFullScreen></iframe>
            </div>
           
            <FilmDescription className="film-description" Description={props.Description} />
            
        </div>
    );
}

export default FilmBody;
