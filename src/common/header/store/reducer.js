/**
 * Created by Administrator on 2018/8/9.
 */
import * as contants from './constants';
import {fromJS} from 'immutable';

const defaultState=fromJS({
    focused:false,
    page:1,
    totalPage:1,
    mouseIn:false,
    SearchList:[]
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case contants.SEARCH_FOCUS:
            return state.set('focused',true);
        case contants.SEARCH_BLUR:
            return state.set('focused',false);
        case contants.CHANGE_LIST:
            return state.merge({
                SearchList:action.data,
                totalPage:action.totalPage
            });
        case contants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case contants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case contants.CHANGE_PAGE:
            return state.set('page',action.page)
        default:
            return state
    }
}