import {applyMiddleware, createStore} from "redux"
import rootReducer from "./index"
import { thunk } from "redux-thunk"

export default function configureStore(){
    // return createStore(rootReducer) //store'u olusturacak fonksiyon

    return createStore(rootReducer, applyMiddleware(thunk)) 
}