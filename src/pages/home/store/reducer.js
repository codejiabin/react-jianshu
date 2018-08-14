/**
 * Created by Administrator on 2018/8/13.
 */
import {fromJS} from 'immutable';
import * as contants from './constants';

const defaultState=fromJS({
   topicList:[],
   articleList:[],
   recommendList:[],
   articlePage:1,
   showScroll:false
});

const changeHomeData=(state,action)=>{
    return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList)
    })
};

const addArticleList=(state,action)=>{
    return state.merge({
        'articleList':state.get('articleList').concat(action.list),
        'articlePage':action.nextPage
    })
}

export default (state=defaultState,action)=>{
    switch (action.type){
        case contants.CHANGE_HOME_DATA:
            return changeHomeData(state,action);
        case contants.ADD_ARTICLE_LIST:
            return addArticleList(state,action);
        case contants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show)
        default:
            return state;
    }
}