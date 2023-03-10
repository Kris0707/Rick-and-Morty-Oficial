import {ADD_FAVORITES,DELETE_FAVORITE,FILTER,ORDER} from "../actions/action-types"



const initialState ={
myFavorites:[],
allCharacters:[],
errors:{}
}

const rootReducer = (state = initialState,{type,payload}) =>{
    switch(type){
        case ADD_FAVORITES:
            return{
                ...state,
                myFavorites:payload,
                allCharacters:payload,
            }
        case FILTER:
            const allCharsFiltered = state.allCharacters.filter((char) => {
            return char.gender === payload;
                });
            return {
            ...state,
            myFavorites: allCharsFiltered,
        };

        case ORDER:
            return {
        ...state,
            myFavorites:
                payload === "Ascendente"
                ? state.allCharacters.sort((a, b) => a.id - b.id)
                : state.allCharacters.sort((a, b) => b.id - a.id),
            };
        
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites: payload,
                errors:{}
            };
        case "ERROR":
            return{
            ...state,
            errors:payload
        }
        case "GET_FAVS":
            return{
                ...state,
                myFavorites:payload,
                errors:{}
            }
            default:
            return {...state};
    }

}
// console.log(initialState.myFavorites)

export default rootReducer