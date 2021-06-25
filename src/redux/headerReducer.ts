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
        const imageNumber = ~~(Math.random() * 20);
        return {
          ...state,
          headerImage: `${action.payload.photos[imageNumber].src.original}?auto=compress&crop=focalpoint&cs=tinysrgb&dpr=2&h=800&w=1400`,
          photograph: action.payload.photos[imageNumber].photographer,
          photographLink: action.payload.photos[imageNumber].url,
        };
      default:
        return state;
    }
  }