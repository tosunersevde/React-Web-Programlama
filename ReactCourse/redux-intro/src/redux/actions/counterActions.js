import * as actionTypes from "./actionTypes" //3 export oldugu icin * koyduk

//=() Fonksiyon demektir, =>() degiskeninin degeri bir fonksiyondur, {} parametresi ise bir objedir
export const increaseCounter=()=>({
    //aksiyonumuz bir fonksiyon ve o fonksiyonun parametresi bunlar
    type:actionTypes.INCREASE_COUNTER, //aksiyon tipi
    payload:1 
}) 

export const decreaseCounter=()=>({
    type:actionTypes.DECREASE_COUNTER, 
    payload:1 
}) 

export const increaseByTwoCounter=()=>({
    type:actionTypes.INCREASE_BY_TWO_COUNTER, 
    payload:2 //event turunun gonderilen data'si gibidir (ikiser artis olacagi icin 2) 
}) 