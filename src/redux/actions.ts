import { LOAD_IMAGE_HEADER, LOAD_IMAGES_MAIN, INPUT_CHANGE, LOAD_IMAGE_SEARCH, LOAD_IMAGE_SEARCH_PAGINATION, SET_FETCHING } from './actionTypes';
import axios from './app.config';
//const { default: axios } = require('axios');

export function getBackgroundImageHeader() {
  const page = Math.floor(Math.random() * 25);
  return (dispatch: Function) => {
    axios.get(`/search?query=sea&orientation=landscape&size=medium&per_page=1&page=${page}`, {
    }).then((response: any) => {
      const result = response.data;
      dispatch({ type: LOAD_IMAGE_HEADER, payload: result })
    })
  }
}

export function getImagesMain(page: number) {
  return (dispatch: Function) => {
    axios.get(`/curated?per_page=20&page=${page}`, {
    }).then((response: any) => {
      dispatch(setFetching(false));
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


export function searchImages(searchValue: string, page: number) {
  return (dispatch: Function) => {
    dispatch({ type: LOAD_IMAGE_SEARCH });
    axios.get(`/search?query=${searchValue}&per_page=20&page=${page}`, {
    }).then((response: any) => {
      dispatch(setFetching(false));
      const result = response.data;
      dispatch({ type: LOAD_IMAGES_MAIN, payload: result })
    })
  }
}

export function searchImagesPagination(searchValue: string, page: number) {
  return (dispatch: Function) => {
    axios.get(`/search?query=${searchValue}&per_page=20&page=${page}`, {
    }).then((response: any) => {
      dispatch(setFetching(false));
      const result = response.data;
      dispatch({ type: LOAD_IMAGE_SEARCH_PAGINATION, payload: result })
    })
  }
}

export function setFetching(value: boolean) {
  return (dispatch: Function) => {
    dispatch({ type: SET_FETCHING, payload: value });
  }
}