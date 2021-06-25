import { LOAD_IMAGE_HEADER } from './actionTypes';


const { default: axios } = require('axios');

export function getBackgroundImageHeader() {
  return (dispatch: Function) => {
    axios.get('https://api.pexels.com/v1/search?query=sea&orientation=landscape&size=medium&per_page=20&page=1', {
      headers: {
        Authorization:
          '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf',
      },
    }).then((response: any) => {
      const result = response.data;
      dispatch({type: LOAD_IMAGE_HEADER, payload: result})
    })
  }
}