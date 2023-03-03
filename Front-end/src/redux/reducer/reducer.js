import {ADD_FAVORITES,DELETE_FAVORITE,FILTER,ORDER} from "../actions/action-types"



const initialState ={
myFavorites:[],
allCharacters:[],
}

const rootReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_FAVORITES:
            return{
                ...state,
                myFavorites:[...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload],
            }
        case FILTER:
            const allCharsFiltered = state.allCharacters.filter((char) => {
            return char.gender === action.payload;
                });
            return {
            ...state,
            myFavorites: allCharsFiltered,
        };

        case ORDER:
            return {
        ...state,
            myFavorites:
                action.payload === "Ascendente"
                ? state.allCharacters.sort((a, b) => a.id - b.id)
                : state.allCharacters.sort((a, b) => b.id - a.id),
            };
        
        case DELETE_FAVORITE:
        let filterarray = state.myFavorites.filter((elem) => elem.id !== action.payload);
            return{
                ...state,
                myFavorites: filterarray
            };
            default:
            return state;
    }

}
// console.log(initialState.myFavorites)

export default rootReducer