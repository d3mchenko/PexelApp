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
        const headerImgNumber = Math.floor(Math.random() * 25); 
        return {
          ...state,
          headerImage: `${action.payload.photos[headerImgNumber].src.original}?auto=compress&crop=focalpoint&cs=tinysrgb&dpr=2&h=800&w=1400`,
          photograph: action.payload.photos[headerImgNumber].photographer,
          photographLink: action.payload.photos[headerImgNumber].url,
        };
      default:
        return state;
    }
  }