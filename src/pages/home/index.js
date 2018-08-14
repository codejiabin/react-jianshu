/**
 * Created by Administrator on 2018/8/13.
 */
import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import Topic from './component/Topic';
import List from './component/List';
import Writer from './component/Writer';
import Recommend from './component/Recommend';
import {actionCreators} from './store';
import {BackTop} from './style'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'

class Home extends PureComponent{
    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4379/0d07d691d87f6427500535bd0e97c08ce05f603c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {
                    this.props.showScroll?<BackTop onClick={this.handleScrollTop}>顶部</BackTop>:null
                }
            </HomeWrapper>
        )
    }

    componentDidMount(){
       this.props.changeHomeData();
       this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapState=(state)=>({
    showScroll:state.getIn(['home','showScroll'])
})

const mapDispatch=(dispatch)=>({
    changeHomeData(){
        const action=actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>200){
            dispatch(actionCreators.toggleTopShow(true))
        }else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});

export default connect(mapState,mapDispatch)(Home);