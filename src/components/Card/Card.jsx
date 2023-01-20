import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({ id, name, gender, species, image, onClose}) {
   return (
      <div className={style.divCard}>
         <button onClick={ onClose }>X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" />
      </div>
   );
}
