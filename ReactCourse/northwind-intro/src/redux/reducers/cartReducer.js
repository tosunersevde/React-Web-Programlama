import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function cartReducer(state=initialState.cart, action){
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //eleman sepette var mi
            var addedItem = state.find(c=>c.product.id === action.payload.product.id);
            //Listede addedItem varsa mevcut elemanın quantity'sini 1 artırır
            if(addedItem){
                var newState = state.map(cartItem=>{
                    //if(cartItem.product.id === action.cartItem.product.id){
                    //payload cart item'ın kendisi
                    if(cartItem.product.id === action.payload.product.id){
                        return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
                    }
                    return cartItem; //return edldiginde her bir urunu listeye ekler, olusan array newState'ye atilir.
                })
                return newState;
            }else{
                //sepette eleman yoksa
                return [...state, {...action.payload}] //state'in bir kopyasını alir, o kopyaya action ile gelen payload'ı ekler.
            }
            
        case actionTypes.REMOVE_FROM_CART:
            //id farklıysa onları filtrele
            //Parametreden gonderilen id'den farklı olanlari yeni bir array yapar, referans degisir.
            const newState2 = state.filter(cartItem=>cartItem.product.id!==action.payload.id)
            return newState2;

        default:
            return state;
    }
}