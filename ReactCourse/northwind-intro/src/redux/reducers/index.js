//Butun reducer'lar bir araya getirilir.
import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
import saveProductReducer from "./saveProductReducer";
 
const rootReducer = combineReducers({
    changeCategoryReducer,
    //changeCategoryReducer:changeCategoryReducer
    //a:changeCategoryReducer

    categoryListReducer,

    productListReducer,

    cartReducer,
    
    saveProductReducer
})

export default rootReducer;