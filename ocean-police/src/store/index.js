import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers/root';

const storeEnhancer = applyMiddleware(thunk);

const createStoreWithMiddleware = () =>
  composeWithDevTools(storeEnhancer)(createStore);

const configureStoreCreator = (reducer) => () => {
  const store = createStoreWithMiddleware()(reducer);

  return store;
};

export default configureStoreCreator(rootReducer);
