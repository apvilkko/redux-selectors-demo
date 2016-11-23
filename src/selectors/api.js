import R from 'ramda';

export const getSection = prefix => R.pathOr({}, ['api', prefix]);

export const hasLoadingThings = R.pipe(
  R.values,
  R.map(R.prop('loading')),
  R.any(R.equals(true)),
);
