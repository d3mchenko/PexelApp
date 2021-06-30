import { combineReducers } from "redux";
import { headerReducer } from './headerReducer';
import { imagesReducer } from "./imagesReducer";
import { searchReducer } from "./searchReducer";
import { filterReducer } from "./filterReducer";




export const rootReducer = combineReducers({
    headerReducer: headerReducer,
    imagesReducer: imagesReducer,
    searchReducer: searchReducer,
    filterReducer: filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>;