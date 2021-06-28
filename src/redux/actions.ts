import { LOAD_IMAGE_HEADER, LOAD_IMAGES_MAIN, INPUT_CHANGE, LOAD_IMAGE_SEARCH } from './actionTypes';
import { API_KEY } from './app.config';


const { default: axios } = require('axios');

export function getBackgroundImageHeader() {
  const page = Math.floor(Math.random() * 25);
  return (dispatch: Function) => {
    axios.get(`https://api.pexels.com/v1/search?query=sea&orientation=landscape&size=medium&per_page=1&page=${page}`, {
      headers: {
        Authorization:
          API_KEY,
      },
    }).then((response: any) => {
      const result = response.data;
      dispatch({ type: LOAD_IMAGE_HEADER, payload: result })
    })
  }
}

export function getImagesMain(page: number) {
  return (dispatch: Function) => {
    axios.get(`https://api.pexels.com/v1/curated?per_page=20&page=${page}`, {
      headers: {
        Authorization:
          API_KEY,
      },
    }).then((response: any) => {
      const result = response.data;
      dispatch({ type: LOAD_IMAGES_MAIN, payload: result })
    })
  }
}

export function handleInputChangeValue(value: string) {
  return (dispatch: Function) => {
    dispatch({ type: INPUT_CHANGE, payload: value })
  }
}


export function searchImages(searchValue: string) {
  return (dispatch: Function) => {
    dispatch({ type: LOAD_IMAGE_SEARCH });
    axios.get(`https://api.pexels.com/v1/search?query=${searchValue}&per_page=20&page=1`, {
      headers: {
        Authorization:
          API_KEY,
      },
    }).then((response: any) => {
      const result = response.data;
      dispatch({ type: LOAD_IMAGES_MAIN, payload: result })
    })
  }
}