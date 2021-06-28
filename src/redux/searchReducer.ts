import { INPUT_CHANGE } from './actionTypes';

interface InitialSearchStateTypes {
    inputValue: string;
}

const initialState: InitialSearchStateTypes = {
    inputValue: '',
};

export function searchReducer(state: InitialSearchStateTypes = initialState, action: { type: string; payload?: any }) {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                inputValue: action.payload,
            };
        default:
            return state;
    }
}