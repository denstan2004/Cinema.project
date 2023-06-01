import React from "react";
import Card from "../../Card/Card.js";
import "./UserFavouriteGames.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserFavouriteGames = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const url = `http://localhost:8080/users/UserFilms/${localStorage.getItem("userId")}`;
        const fetchData = (u) => {
            return axios.get(u).then((res) => {
                console.log(res.data);
                setData(res.data);
            });
        };
        fetchData(url);
        
    }, []);

    return (<>
        <div className="body-header">
            <h2>Favourite Games</h2>
        </div>
    <div className="user-favourite-games">
        {
        data!==null?
        data.map(film => (
        <div>
            <Card
                Id = {film.id}
                Image = {film.picture === null ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" : film.picture}
                Name = {film.name}
                Ganre = {film.ganre}
                Rating = {film.rating}
                Director = {film.director === null ? "N/A" : film.director}
            />
        </div>)) : (
        <div>
            <h1>This user does not have favourite games for now.</h1>
        </div>)}
    </div>
    </>);
}

export default UserFavouriteGames;