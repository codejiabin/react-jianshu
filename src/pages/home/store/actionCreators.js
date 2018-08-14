/**
 * Created by Administrator on 2018/8/13.
 */
import axios from 'axios';
import * as contants from './constants';
import {fromJS} from 'immutable';

const changeHomeData=(result)=>({
    type:contants.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList
});

export const getHomeInfo=()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result=res.data.data;
            dispatch(changeHomeData(result));
        })
    }
};

const addHomeList=(list,nextPage)=>({
    type:contants.ADD_ARTICLE_LIST,
    list:fromJS(list),
    nextPage
})

export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page).then((res)=>{
            const result=res.data.data;
            dispatch(addHomeList(result,page+1));
        })
    }
};

export const toggleTopShow=(show)=>({
    type:contants.TOGGLE_SCROLL_TOP,
    show
});

