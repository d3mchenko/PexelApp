import { combineReducers, createStore } from "redux";
import { headerReducer } from "./headerReducer";


const reducers = combineReducers({
    headerReducer,
})

let store = createStore(reducers);

export default store;