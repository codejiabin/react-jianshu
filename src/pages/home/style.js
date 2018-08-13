/**
 * Created by Administrator on 2018/8/13.
 */
import styled from 'styled-components';

export const HomeWrapper=styled.div`
  overflow:hidden;
  width:960px;
  margin:0 auto;
`;

export const HomeLeft=styled.div`
  float:left;
  margin-left:15px;
  padding-top:30px;
  width:625px;
  .banner-img{
    width:625px;
    height:270px;
  }
`;

export const HomeRight=styled.div`
  width:280px;
  float:right;
`;

export const TopicWrapper=styled.div`
  overflow:hidden;
  padding:20px 0 10px 0;
  margin-left:-18px;
  border-bottom:1px solid #dcdcdc;
`;

export const TopicItem=styled.div`
  float:left;
  height:32px;
  line-height:32px;
  padding-right:10px;
  margin-left:18px;
  margin-bottom:18px;
  background:#f7f7f7;
  font-size:14px;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  .topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
  }
`;

export const ListItem=styled.div`
  overflow:hidden;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  .pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:10px;
  }
`;

export const ListInfo=styled.div`
  width:500px;
  float:left;
  .title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
  }
  .desc{
    line-height:24px;
    font-size:13px;
    color:999;
  }
`;

export const IconList=styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    a{
      margin-right: 10px;
      color: #b4b4b4;
      text-decoration:none;
      .Icon{
        vertical-align:top;
        margin-right:5px;
      }
    }
`;

export const RecommendWrapper=styled.div`
  margin:30px 0;
  width:280px;
`;

export const RecommendItem=styled.div`
  width:280px;
  height:50px;
  background:url(${(props)=>props.imgUrl});
  background-size:contain;
  margin-bottom:6px;
  cursor:pointer;
`;

export const WriterWrapper=styled.div`
  width:278px;
  border:1px solid #dcdcdc;
  border-radius:3px;
  height:300px;
  line-height:300px;
  text-align:center;
`;