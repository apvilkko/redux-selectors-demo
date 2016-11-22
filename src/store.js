import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Devtools from './components/Devtools';
import reducers from './reducers';

const enhancer = compose(
  applyMiddleware(thunk),
  Devtools.instrument()
);

export default () => {
  const store = createStore(reducers, {}, enhancer);
  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers').default)
    );
  }
  return store;
};
