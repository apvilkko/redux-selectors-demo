import {createSelector} from 'reselect';
import {isCatsLoading} from './cats';
import {isMoviesLoading} from './movies';

export const isSomethingLoading = createSelector(
  [isCatsLoading, isMoviesLoading],
  (c, m) => c || m
);
