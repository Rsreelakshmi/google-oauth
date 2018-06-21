import { createStore, applyMiddleware, compose } from "redux";
import thunk  from 'redux-thunk';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunk);

export default createStore(rootReducer,
compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f));
