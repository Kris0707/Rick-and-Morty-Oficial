import { connect } from "react-redux";
import Card from '../Card/Card.jsx';
import { useSelector, useDispatch } from "react-redux";
import { orderCards,filterCards } from "../../redux/actions/actions.js";
function Favorites(){
const { myFavorites } = useSelector((state) => state);
const dispatch = useDispatch();

const handleOrderCards = (event) => {
    dispatch(orderCards(event.target.value));
};

const handleFilterCards = (event) => {
    dispatch(filterCards(event.target.value));
};




return(
<div>
    <div>
        <select onChange={handleOrderCards}>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
        </select>
        <select  onChange={handleFilterCards}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        </select>
    </div>
{myFavorites.map((character) => (
    <Card key={character.id} 
    name={character.name}
    species={character.species}
    gender={character.gender}
    image={character.image}
    id ={character.id}
/>
))}
</div>
);

}


const mapStrateToProps = (state) =>{
    return{
    myFavorites:state.myFavorites
    }
}


export default connect(mapStrateToProps,null)(Favorites)