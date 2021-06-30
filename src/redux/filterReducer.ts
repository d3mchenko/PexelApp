import { FILTER_ORIENTATION } from './actionTypes';

interface InitialSearchStateTypes {
    orientation: string;
}

const initialState: InitialSearchStateTypes = {
    orientation: 'all orientations',
};

export function filterReducer(state: InitialSearchStateTypes = initialState, action: { type: string; payload?: any }) {
    switch (action.type) {
        case FILTER_ORIENTATION:
            return {
                ...state,
                orientation: action.payload,
            };
        default:
            return state;
    }
}