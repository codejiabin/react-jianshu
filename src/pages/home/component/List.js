/**
 * Created by Administrator on 2018/8/13.
 */
import React,{Component} from 'react';
import {ListItem,ListInfo,IconList} from '../style';
import {connect} from 'react-redux';

class List extends Component{
    render(){
        const {list}=this.props;
        return (
            <div>
                {
                  list.map((item)=>{
                    return (
                        <ListItem key={item.get('id')}>
                            <img className="pic" src={item.get('imgUrl')} alt=""/>
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                            <IconList>
                                <a href="" className="author">{item.get('author')}</a>
                                <a href="">
                                    <i className="iconfont Icon">&#xe7b9;</i>
                                    {item.get('WatchNum')}
                                </a>
                                <a href="">
                                    <i className="iconfont Icon">&#xe6ad;</i>
                                    {item.get('CollectNum')}
                                </a>
                            </IconList>
                        </ListItem>
                    )
                  })
                }
            </div>

        )
    }
}

const mapState=(state)=>({
   list:state.getIn(['home','articleList'])
});

export default connect(mapState,null)(List);