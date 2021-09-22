import { createSelector } from "reselect"

 

export const getStatus =(state)=>{
    return state.GiveAcceptReducer.status
}
 
export const getStatusSuperSelector = createSelector(getStatus, (status)=> {
    return status
})
 
export const getProductItem =(state)=>{
    return state.GiveAcceptReducer.ProductItem 
}
export const Profile =(state)=>{
    return state.GiveAcceptReducer.profile
}
export const getAuthId =(state)=>{
    return state.auth.id
}
export const getIsAuth =(state)=>{
    return state.auth.isAuth
}