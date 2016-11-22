import {get, clear} from './api';

const CATS_URL = 'http://lorempixel.com/200/200/cats/';

export const loadPics = amount => dispatch => {
  dispatch(clear());
  for (let i = 0; i < amount; ++i) {
    setTimeout(() => {
      dispatch(get({key: i, url: CATS_URL, amount}));
    }, i * 1000);
  }
};
