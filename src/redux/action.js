import { ADD_USER, DELETE_USER, EDIT_USER } from "./actionType"
export const addUser=(user)=>{
   return{
        type:ADD_USER,
        payload:user
   } 
}

export const deleteUser=(user)=>{
    return{
        type:DELETE_USER,
        payload:user
    }
}

export const editUser=(user,index)=>{
    return{
        type:EDIT_USER,
        payload:{user,index},

    }
}