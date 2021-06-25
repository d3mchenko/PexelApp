import { combineReducers} from "redux";
import { headerReducer } from './headerReducer';



export const rootReducer = combineReducers({
    headerReducer: headerReducer,
})

export type RootState = ReturnType<typeof rootReducer>;