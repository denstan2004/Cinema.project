import React from "react";
import FilmTopInformation from "./FilmTopInformation.js";

import "./FilmHeader.css";


const FilmHeader = (props) => {
    console.log(props);
  
    return (
        <div className="film-header">
            <div>
                <img src={props.Image} alt="FilmImage" />
            </div>
        
            <div>
                <FilmTopInformation
                    Title={props.Title} 
                    Tags={props.Tags}
                    Director={props.Director}
                    Actors={props.Actors}
                    Rating={props.Rating}
                    className="film-top-information"
                ></FilmTopInformation>
               
            </div>
        </div>
    );
}

export default FilmHeader;