import styles from './SearchBar.module.css';
import { useState } from 'react';


export default function SearchBar({ onSearch}) {
   
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div className={styles.divSearchBar}>
         <input type='search' value={character} onChange={handleChange} />
      <button onClick={ ()=> onSearch(character) }>Agregar</button>
      {/* ponemos callback dentro de onClick para poder pasar parametros y que no se ejecute constantemente */}
      </div>
   );
}
