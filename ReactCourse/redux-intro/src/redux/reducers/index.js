import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const reducers = combineReducers({
    //Seklinde de yazilabilir: 
    //counterReducer:counterReducer //Aynı isimde bir degisken olusturup onun icine nesne atiyor
    counterReducer //Biden fazla olursa virgulle ayrilir.
})

export default reducers;