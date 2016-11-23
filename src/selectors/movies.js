import R from 'ramda';
import {createSelector} from 'reselect';
import {getSection, hasLoadingThings} from './api';

const getRoot = getSection('movies');

export const getIds = createSelector(
  getRoot,
  R.keys
)

const decorateTitle = movie => ({
  ...movie,
  TitleAndYear: `${movie.Title} (${movie.Year})`
});

export const getMovie = id => createSelector(
  getRoot,
  R.pipe(
    R.pathOr({}, [id, 'data']),
    decorateTitle
  )
);

export const isMoviesLoading = createSelector(
  getRoot,
  hasLoadingThings
);

const getAllMovies = createSelector(
  getRoot,
  R.pipe(
    R.values,
    R.map(R.prop('data')),
    R.reject(R.isNil),
  )
);

export const is80sFan = createSelector(
  getAllMovies,
  R.pipe(
    R.map(R.prop('Year')),
    R.both(
      R.complement(R.isEmpty),
      R.all(
        R.both(R.lte('1980'), R.gte('1989'))
      ),
    ),
  )
);
