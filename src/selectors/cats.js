import {createSelector} from 'reselect';
import {getSection, hasLoadingThings} from './api';

export const getAmount = state => Object.keys(state.api.cats).length;

const getRoot = getSection('cats');

const getCat = key => createSelector(
  getRoot,
  root => root[key]
);

const isCatLoading = key => createSelector(
  getCat(key),
  cat => cat && cat.loading
);

const getCatUrl = key => createSelector(
  getCat(key),
  cat => cat ? cat.data : null
);

const getLoadedUrl = key => createSelector(
  [isCatLoading(key), getCatUrl(key)],
  (loading, url) => loading ? null : url
);

export const getSources = amount => state =>
  Array.from(Array(amount)).map((_, i) => getLoadedUrl(i)(state))

export const isCatsLoading = createSelector(
  getRoot,
  hasLoadingThings
);
