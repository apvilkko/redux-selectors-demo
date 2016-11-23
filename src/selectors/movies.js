import R from 'ramda';
import {createSelector} from 'reselect';
import {getSection, hasLoadingThings} from './api';

const getRoot = getSection('movies');

export const getIds = createSelector(
  getRoot,
  root => R.keys(root)
)

export const getMovie = id => createSelector(
  getRoot,
  R.pathOr({}, [id, 'data'])
);

export const isMoviesLoading = createSelector(
  getRoot,
  hasLoadingThings
);
