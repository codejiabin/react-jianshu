/**
 * Created by Administrator on 2018/8/9.
 */
import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';

const reducer = combineReducers({
    header:headerReducer
});

export  default reducer;

