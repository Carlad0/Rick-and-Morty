import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Detail = () => {
    //obten ID de personaje mediante useParams
    const { detailId } = useParams(); 
    //crea un estado local mediante useState (este hook simula los ciclos de vida)
    const [character, setCharacter] = useState({});

    //useEffect trae toda la info de un personaje en especifico
    useEffect(() => {          
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
            return setCharacter({});
    }, [detailId]);


    return(
        <>
            <button>              
                <Link to='/home'>Home</Link>
            </button>
            <h1>{character?.name}</h1>
            <p>{character?.status}</p>
            <p>{character?.species}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>
            <img src={character.image} alt={character.name} />

        </>
    );
};

export default Detail;