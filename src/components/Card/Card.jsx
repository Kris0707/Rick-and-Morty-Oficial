import {Link} from "react-router-dom"

import styles from "./Card.module.css";

export default function Card(props) {
   const {onClose} = props
   return (
      <div className={styles.card}>
       <button className={styles.button} onClick={onClose}>X</button>
         <img className={styles.img} src={props.image} alt={props.name} />
         <div className={styles.info} >
         <Link to={`/detail/${props.id}`}>
         <h2 className={styles.name}>{props.name}</h2>
         </Link>
         <h2 className={styles.subtitle}>Especie: {props.species}</h2>
         <h2 className={styles.subtitle}>Genero: {props.gender}</h2>
         </div>
         
      </div>
   );
}
