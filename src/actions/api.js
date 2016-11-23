export const API_START = 'api/START';
export const API_DONE = 'api/DONE';
export const API_CLEAR = 'api/CLEAR';

const start = payload => ({type: API_START, payload});
const done = payload => ({type: API_DONE, payload});
export const clear = payload => ({type: API_CLEAR, payload});

const getBlob = (payload, dispatch) => {
  fetch(payload.url)
  .then(resp => resp.blob())
  .then(blob => {
    dispatch(done({
      ...payload,
      url: URL.createObjectURL(blob)
    }));
  });
}

const getResponse = (payload, dispatch) => {
  fetch(payload.url)
  .then(resp => resp.json())
  .then(data => {
    dispatch(done({
      ...payload,
      data,
    }));
  });
}

export const get = payload => dispatch => {
  dispatch(start(payload));

  if (payload.url === '/pic') {
    return getBlob(payload, dispatch);
  }
  return getResponse(payload, dispatch);
}
