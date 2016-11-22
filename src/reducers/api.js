import {API_START, API_DONE, API_CLEAR} from '../actions/api';

export default (state = {}, action) => {
  switch (action.type) {
    case API_START:
      return {
        ...state,
        amount: action.payload.amount,
        [action.payload.key]: {
          loading: true,
          url: action.payload.url,
        }
      };
    case API_DONE:
      return {
        ...state,
        [action.payload.key]: {
          loading: false,
          url: action.payload.url,
        }
      };
    case API_CLEAR:
      return {};
    default:
      return state;
  }
}
