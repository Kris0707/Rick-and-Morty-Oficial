import {ADD_FAVORITES,DELETE_FAVORITE,FILTER,ORDER} from "./action-types"



export function filterCards(gender){
return{
    type:FILTER,
    payload:gender,
}
}


export function orderCards(id){
    return{
        type:ORDER,
        payload:id
    }
}


export function addfavorites(character){
    console.log("Funciona")
    return{
        type:ADD_FAVORITES,
        payload:character,
    };
    }

export function deletefavorite(id){
     console.log("Funciona Delete")
       return{
        type:DELETE_FAVORITE,
        payload:id
       }

    }