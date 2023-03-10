import {ADD_FAVORITES,DELETE_FAVORITE,FILTER,ORDER} from "./action-types"
import axios from "axios"


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

export function getfavorites(){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/favs/get");
            return dispatch({type:"GET_FAVS",payload:response.data})
        } catch (error) {
            return dispatch({type:"ERROR",payload:error})
        }
    }
}
export function addfavorites(character){
    return async function (dispatch){
        try {
        const response = await axios.post("http://localhost:3001/favs/create", character);
        return dispatch({
        type:ADD_FAVORITES,
        payload:response.data, 
        })
    } catch (error) {
            return dispatch({type:"ERROR", payload:error})
        }
    }
};
    

export function deletefavorite(id){
return async function(dispatch){
    try {
        const response =  await axios.delete("http://localhost:3001/favs/delete/"+ id);
        return dispatch({
        type:DELETE_FAVORITE,
        payload:response.data,
        })
    } catch (error) {
        return dispatch({type:"ERROR",payload:error})
    }
}
}

