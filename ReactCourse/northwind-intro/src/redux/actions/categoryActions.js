import * as actionTypes from "./actionTypes"

export function changeCategory(category){
    //return {type:actionTypes.CHANGE_CATEGORY, category} 
    //return {type:actionTypes.CHANGE_CATEGORY, category:category} 
    return {type:actionTypes.CHANGE_CATEGORY, payload:category} 
    //reducer'da CHANGE_CATEGORY'i gordugu anda state payload'da belirtilen deger olarak set edilir.
}

export function getCategoriesSuccess(categories){
    return {type:actionTypes.GET_CATEGORIES_SUCCESS, payload:categories}
}

export function getCategories(){
    return  function(dispatch) {
        //debugger;
        let url ="http://localhost:3000/categories"
        return fetch(url).then(response=>response.json()) //response her zaman stringtir (tipi).
        .then(result=>dispatch(getCategoriesSuccess(result)));
    }
}