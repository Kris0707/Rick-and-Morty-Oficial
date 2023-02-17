import Card from '../Card/Card.jsx';
import styles from "./Cards.module.css"

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
   <div className={styles.container}>
      {
characters.map((element) => (
   <Card 
   name={element.name}
   species={element.species}
   gender={element.gender}
   image={element.image}
   onClose={() => onClose(element.id)}
   key={element.id}
   id ={element.id}
   ></Card>
))
      }
   </div>
   )
}
