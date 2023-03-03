import {Link} from "react-router-dom"
import { addfavorites,deletefavorite } from "../../redux/actions/actions";
import styles from "./Card.module.css";
import { useDispatch,useSelector } from "react-redux";
import { connect } from "react-redux";
import { useState,useEffect} from "react";

function Card({ name, species, gender, image, onClose, id }) {
   const [isFav,setIsFav] = useState(false)
   
   const dispatch = useDispatch()
   const myFavorites = useSelector((state) => state.myFavorites);


const handleFavorite = () => {
   if (isFav) {
     setIsFav(false);
     dispatch(deletefavorite(id));
   } else {
     setIsFav(true);
     dispatch(
       addfavorites({
         name,
         species,
         gender,
         image,
         onClose,
         id,
       })
     );
   }
 };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);




   return (
      <div className={styles.card}>
        {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ):(
            <button onClick={handleFavorite}>🤍</button>
         )
        } 
       <button className={styles.button} onClick={onClose}>X</button>
       
         <img className={styles.img} src={image} alt={name} />
         <div className={styles.info} >
         <Link to={`/detail/${id}`}>
         <h2 className={styles.name}>{name}</h2>
         </Link>
         <h2 className={styles.subtitle}>Especie: {species}</h2>
         <h2 className={styles.subtitle}>Genero: {gender}</h2>
         </div>
         
      </div>
   );
}




const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
    }
}


const mapDispatchToProps = (dispatch) =>{
return{
   ADD_FAVORITES:(character)=>dispatch(addfavorites(character)),
   DELETE_FAVORITE:(id)=>dispatch(deletefavorite(id))
}
}



export default connect(mapStateToProps,mapDispatchToProps)(Card);