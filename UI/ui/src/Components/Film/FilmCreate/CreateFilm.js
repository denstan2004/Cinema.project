import React from "react";
import "./UserRegister.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateFilm = () => {
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    const [director, setDirector] = useState("");
    const [actors, setActors] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(0);
    const [genre, setGenre] = useState("");
    const [trailer, setTrailer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/films", {
                name: name,
                picture: picture,
                director: director,
                actors: actors,
                description: description,
                rating: rating,
                ganre: genre,
                trailer: trailer
            })
            .then(response => {
                navigate('/Cinema');
                console.log(response.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="box-register">
            <form>
                <span className="text-center">New Film</span>
                <div className="input-container-register">
                    <input type="text" onChange={event => setName(event.target.value)} required />
                    <label>Name</label>
                </div>
                <div className="input-container-register">
                    <input type="text" onChange={event => setPicture(event.target.value)} />
                    <label>Picture (URL for Image)</label>
                </div>
                <div className="input-container-register">
                    <input type="text" onChange={event => setDirector(event.target.value)} />
                    <label>Director</label>
                </div>
                <div className="input-container-register">
                    <input type="text" onChange={event => setActors(event.target.value)} />
                    <label>Actors</label>
                </div>
                <div className="input-container-register">
                    <input type="text" onChange={event => setDescription(event.target.value)} required />
                    <label>Description</label>
                </div>
                <div className="input-container-register">
                    <input type="number" onChange={event => setRating(event.target.value)} />
                    <label>Rating</label>
                </div>
                <div className="input-container-register">
                    <input type="text" onChange={event => setGenre(event.target.value)} />
                    <label>Genre</label>
                </div>
                <div className="input-container-register">
                    <input type="text" onChange={event => setTrailer(event.target.value)} />
                    <label>Trailer</label>
                </div>
                <button type="button" className="btn-register" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default CreateFilm;
