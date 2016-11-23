import R from 'ramda';

export const getSection = prefix => R.pathOr({}, ['api', prefix]);

export const hasLoadingThings = root => R.pipe(
  R.map(R.prop('loading')),
  R.any(R.equals(true)),
)(R.values(root));
