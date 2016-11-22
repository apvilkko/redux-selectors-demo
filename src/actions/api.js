export const API_START = 'api/START';
export const API_DONE = 'api/DONE';
export const API_CLEAR = 'api/CLEAR';

const start = payload => ({type: API_START, payload});
const done = payload => ({type: API_DONE, payload});
export const clear = () => ({type: API_CLEAR});

const config = {mode: 'no-cors'};

export const get = payload => dispatch => {
  dispatch(start(payload));

  fetch(payload.url, config)
  .then(resp => {
    if (resp.type === 'opaque') {
      dispatch(done(payload));
    }
  });
}
