/**
 * Created by Administrator on 2018/8/13.
 */
import React,{Component} from 'react';
import {DetailWrapper,Header,Content} from './style';

class Detail extends Component{
    render(){
        return (
            <DetailWrapper>
                <Header>我就喜欢钱，你能把我咋滴</Header>
                <Content>
                    <img src="//upload-images.jianshu.io/upload_images/2729710-98abdec1fb5f4105.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/640" alt=""/>
                    <p>每个月看到手机显示银行卡里的数字越来越多，心里美滋滋的。虽然我是个小财迷，但是靠自己努力获得的成果</p>
                    <p>每个月看到手机显示银行卡里的数字越来越多，心里美滋滋的。虽然我是个小财迷，但是靠自己努力获得的成果</p>
                    <p>每个月看到手机显示银行卡里的数字越来越多，心里美滋滋的。虽然我是个小财迷，但是靠自己努力获得的成果</p>
                    <p>每个月看到手机显示银行卡里的数字越来越多，心里美滋滋的。虽然我是个小财迷，但是靠自己努力获得的成果</p>
                </Content>
            </DetailWrapper>
        )
    }
}

export default Detail;