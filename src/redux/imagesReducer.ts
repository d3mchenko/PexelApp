import { LOAD_IMAGES_MAIN, LOAD_IMAGE_SEARCH, LOAD_IMAGE_SEARCH_PAGINATION, SET_FETCHING } from './actionTypes';

export interface ImageInfoType {
    landscape?: string;
    large?: string;
    large2x?: string;
    medium?: string;
    original: string;
    portrait?: string;
    small?: string;
    tiny?: string;
}

export interface ImageObjectTypes {
    avg_color: string;
    height: number;
    width: number;
    id: number;
    liked: boolean;
    photographer: string;
    photographer_id: number;
    photographer_url: string;
    url: string;
    src: ImageInfoType;
}

interface InitialImagesStateTypes {
    photos: ImageObjectTypes[];
    currentPage: number;
    fetching: boolean;
}

const initialState: InitialImagesStateTypes = {
    photos: [],
    currentPage: 1,
    fetching: true,
};


export function imagesReducer(state: InitialImagesStateTypes = initialState, action: { type: string; payload?: any }) {
    switch (action.type) {
        case LOAD_IMAGES_MAIN:
            return {
                ...state,
                photos: state.photos.concat(action.payload.photos),
                currentPage: state.currentPage + 1,
            };
        case LOAD_IMAGE_SEARCH:
            return {
                ...state,
                photos: [],
            };
        case LOAD_IMAGE_SEARCH_PAGINATION:
            return {
                ...state,
                photos: state.photos.concat(action.payload.photos),
                currentPage: state.currentPage + 1,
            };
        case SET_FETCHING:
            return {
                ...state,
                fetching: action.payload,
            }
        default:
            return state;
    }
}