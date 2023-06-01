import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card.js";
import "./MainPage.css";
import "./MainPageBody.css";
import "./MainPageHeader.css";
import "./DropBox.css";

const MainPageSearch = () => {
    const [data, setData] = useState(null);
    const [ganre, setTag] = useState("Жанри: ");
    const [search, setSearch] = useState("");

    let searchReq = {
        words: "",
        ganre: "Жанри: "
    };



    useEffect(() => {
        searchReq.words = search;
        searchReq.ganre = ganre;
        console.log(searchReq);
        const url = "http://localhost:8080/search";
        const fetchData = async (u) => {
            return await axios.get(u, {
                params: searchReq
            }).then((res) => {
                setData(res.data);
            });
        };
        fetchData(url);
    }, [ganre, search]);




    return (
        <div className="main-page">
            <>
                <div className="main-page-header">
                    <div>

                        <section className="header">
                            <div className="title-wrapper">
                                <h1 className="sweet-title">
                                    <span data-text="Sweet">BILLY</span>
                                    <span data-text="Stuff">CINEMA</span>
                                </h1>
                                <span className="top-title">come here boi</span>
                                <span className="bottom-title">WE-WE</span>
                            </div>
                        </section>


                    </div>

                    <div className="form__group">
                        <input type="text" className="form__input" id="name" placeholder="Аватар" onChange={event => { setSearch(event.target.value); }} />
                    </div>
                    <div>
                        <details className="custom-select">
                            <summary className="radios">
                                <input type="radio" name="item" id="default" title="Жанри" defaultChecked />
                                <input type="radio" name="item" id="item1" title="Tags" />
                                <input type="radio" name="item" id="item2" title="Tags" />
                                <input type="radio" name="item" id="item3" title="Tags" />
                                <input type="radio" name="item" id="item4" title="Tags" />
                                <input type="radio" name="item" id="item5" title="Tags" />
                            </summary>
                            <ul className="ul1-list">
                                <li>
                                    <label onClick={() => setTag(HandleClick(ganre, "Жах"))}>Жах</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(ganre, "Екшн"))}>Екшн</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(ganre, "Триллер"))}>Триллер</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(ganre, "Детектив"))}>Детектив</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(ganre, "Бойовик"))}>Бойовик</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(ganre, "Драма"))}>Драма</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(ganre, "Комедія"))}>Комедія</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(ganre, "Аніме"))}>Аніме</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(ganre, "Мультфільм"))}>Мультфільм</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(ganre, "Мюзикл"))}>Мюзикл</label>
                                </li>
                                <li>
                                    <label onClick={() => setTag(HandleClick(ganre, "Фантастика"))}>Фантастика</label>
                                </li>
                               
                            </ul>
                        </details>
                        <h2>{ganre}</h2>
                    </div>
                </div>
                <div>
                    <>
                        <div className="main-body-header">
                            <h2>Результати</h2>
                        </div>
                        <div className="main-page-body">
                            {
                                data !== null ?
                                    data.map(film => (
                                        <div>
                                            <Card
                                                Id={film.id}
                                                Image={film.picture === null ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" : film.picture}
                                                Name={film.name}
                                                Ganre={film.ganre}
                                                Director={film.director}
                                                Rating={film.rating}
                                            />
                                        </div>
                                    )) : (<div>
                                        <h1>NO INFO</h1>
                                    </div>)

                            }
                        </div>
                    </>
                </div>
            </>
        </div>
    );
}

function HandleClick(tags, newTag) {
    if (tags.search(" #" + newTag) !== -1) {
        tags = tags.replace(" #" + newTag, "")
    }
    else {
        tags += " #" + newTag;
    }
    return tags;
}

export default MainPageSearch;