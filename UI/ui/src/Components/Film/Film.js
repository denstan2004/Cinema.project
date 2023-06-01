import React from "react";
import { useState, useEffect } from 'react';
import FilmBody from "./FilmBody/FilmBody.js";
import FilmHeader from "./FilmHeader/FilmHeader.js";
import "./Film.css";
import axios from "axios";

const Film = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const url = `http://localhost:8080/films/${localStorage.getItem("cardId")}`;
        const fetchData = (u) => {
            return axios.get(u).then((res) => {
                setData(res.data);
            });
        };
        fetchData(url);
    }, []);

    return (
        data !== null ? (
            <div className="film-page">
                <FilmHeader Title={data.name} Image={data.picture} Director={data.director} Actors={data.actors} Tags={data.ganre} Rating={data.rating} />
                <FilmBody Description={data.description}  Trailer={data.trailer}/>
            </div>
        ) : (
            <h1>NO INFO</h1>
        )
    );
}

export default Film;