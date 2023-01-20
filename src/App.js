import './App.css'
// import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
// import SearchBar from './components/SearchBar/SearchBar.jsx'
// import characters/*--, { Rick }*/ from './data.js';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';



function App () {

  const [characters, setCharacters] = useState([]); //crea un estado characters donde guardemos el array de personajes
  
  const location = useLocation().pathname

  const navigate = useNavigate();
  
  const [access, setAccess] = useState(false);
  const username = "carlos@henry.com";
  const password = "1Password";

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home')
    }
  }

  useEffect(() => {
    !access && navigate('/');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);


  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    );
  };


  return (
    <div className='App' style={{  }}>
      {
        (location !== '/') && <Nav onSearch={onSearch} />
      }
      <Routes>
        <Route path='/' element={<Form login={login} />}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:detailId' element={<Detail />}/>
      </Routes>  

    </div>
        
  );
};

export default App