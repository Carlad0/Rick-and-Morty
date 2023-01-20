import Card from '../Card/Card';
import styled from './Cards.module.css'

export default function Cards({ characters, onClose}) {
   // const { characters } = props;

   return (
      <div className={styled.divCards}>
         {
            characters.map(({id, name, species, gender, image})=>{
               return <Card className={styled.divCards}
               key={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  id={id}
                  onClose={ () => onClose(id) }
               
               />
            })

         }

      </div>
   )
}
