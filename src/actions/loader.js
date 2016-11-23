import R from 'ramda';
import {get, clear} from './api';

const CATS_URL = '/pic';
const getMovieUrl = id => `/movies/${id}`;

const GREAT_MOVIES = [
  'tt0083658',
  'tt0112281',
  'tt0387808',
  'tt0089886',
  'tt0095519',
  'tt0103064',
  'tt0089374',
];

const shuffle = orig => {
  const a = [...orig];
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
};

const getRandomIds = amount => R.take(amount, shuffle(GREAT_MOVIES));

export const loadPics = amount => dispatch => {
  const prefix = 'cats';
  dispatch(clear({prefix}));
  for (let i = 0; i < amount; ++i) {
    setTimeout(() => {
      dispatch(get({
        key: i,
        url: CATS_URL,
        prefix,
      }));
    }, i * 1000);
  }
};

export const loadMovies = amount => dispatch => {
  const prefix = 'movies';
  dispatch(clear({prefix}));
  getRandomIds(amount).forEach(id => dispatch(get({
    key: id,
    url: getMovieUrl(id),
    prefix,
  })))
};
