/**
 * Created by Administrator on 2018/8/9.
 */
import { createStore,compose } from 'redux';
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(reducer,composeEnhancers());

export default store;