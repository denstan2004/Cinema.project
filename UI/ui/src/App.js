
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Film from './Components/Film/Film';
import UserRegister from './Components/UserRegister/UserRegister';
import UserLogin from './Components/UserLogin/UserLogin';
import User from './Components/User/User';
import MainPageSearch from './Components/MainPage/MainPageSearch';
import Card from './Components/Card/Card';
import { useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CreateFilm from './Components/Film/FilmCreate/CreateFilm';

function App() {
  useEffect(() => {
    document.title = 'Billy Cinema';
  }, []);
  return ( 
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<UserLogin />} />
          <Route path="Film" state={{ from: "occupation" }} element={<Film />} />
          <Route path="Profile" element={<User />} />
          <Route path="CreateFilm" element = {< CreateFilm/>}/>
          <Route path="Cinema" element={<MainPageSearch />} />
          <Route path="Register" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>);
}

export default App;
