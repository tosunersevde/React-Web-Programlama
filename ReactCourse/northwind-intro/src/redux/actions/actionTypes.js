//1.Asama : aksiyonlar yazilir
export const CHANGE_CATEGORY="CHANGE_CATEGORY" //hangi category select edildi
export const GET_CATEGORIES_SUCCESS="GET_CATEGORIES_SUCCESS" //o category'lerin listelenmesi
//Api'ye baglanilarak yapilan asenkron islemler icin redux'ın ortaya koydugu cesitli aciklari
//veya veri kayitlarini drawback'leri cozmek adina Redux Thunk yapısından faydalanılır.

export const GET_PRODUCTS_SUCCESS="GET_PRODUCTS_SUCCESS"

//syccess yazma sebebimiz Redux Thunk'tan yararlanmamızdır
export const CREATE_PRODUCT_SUCCESS="CREATE_PRODUCT_SUCCESS"
export const UPDATE_PRODUCT_SUCCESS="UPDATE_PRODUCT_SUCCESS"

export const ADD_TO_CART="ADD_TO_CART"
export const REMOVE_FROM_CART="REMOVE_FROM_CART"