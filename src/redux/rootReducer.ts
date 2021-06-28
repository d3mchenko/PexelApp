import { combineReducers } from "redux";
import { headerReducer } from './headerReducer';
import { imagesReducer } from "./imagesReducer";
import { searchReducer } from "./searchReducer";




export const rootReducer = combineReducers({
    headerReducer: headerReducer,
    imagesReducer: imagesReducer,
    searchReducer: searchReducer,
})

export type RootState = ReturnType<typeof rootReducer>;