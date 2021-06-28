import { LOAD_IMAGE_HEADER } from './actionTypes';

interface InitialHeaderStateTypes {
  headerImage: string;
  photograph: string;
  photographLink: string;
}

const initialState: InitialHeaderStateTypes = {
  headerImage: '',
  photograph: '',
  photographLink: '',
};

export function headerReducer(state: InitialHeaderStateTypes = initialState, action: { type: string; payload?: any }) {
  switch (action.type) {
    case LOAD_IMAGE_HEADER:
      return {
        ...state,
        headerImage: `${action.payload.photos[0].src.original}?auto=compress&crop=focalpoint&cs=tinysrgb&dpr=2&h=800&w=1400`,
        photograph: action.payload.photos[0].photographer,
        photographLink: action.payload.photos[0].url,
      };
    default:
      return state;
  }
}