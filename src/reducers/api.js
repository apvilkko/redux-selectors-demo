import {API_START, API_DONE, API_CLEAR} from '../actions/api';

const initialState = {
  cats: {},
  movies: {},
};

export default (state = initialState, action) => {
  const {prefix, key, data, url} = action.payload || {};
  switch (action.type) {
    case API_START:
      return {
        ...state,
        [prefix]: {
          ...state[prefix],
          [key]: {
            loading: true,
            url,
          }
        }
      };
    case API_DONE:
      return {
        ...state,
        [prefix]: {
          ...state[prefix],
          [key]: {
            loading: false,
            url,
            data,
          }
        }
      };
    case API_CLEAR:
      return {
        ...state,
        [prefix]: {}
      };
    default:
      return state;
  }
}
