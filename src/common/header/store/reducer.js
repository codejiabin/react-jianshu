/**
 * Created by Administrator on 2018/8/9.
 */
const defaultState={
    focused:false
};

export default (state=defaultState,action)=>{
    if(action.type==='search_focus'){
        return {
            focused:true
        }
    }
    if(action.type==='search_blur'){
        return {
            focused:false
        }
    }
    return state;
}