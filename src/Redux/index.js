import {createStore,combineReducers,applyMiddleware,compose } from "redux";// createStore
import titleReducer from "./Reducer/titleReducer";


// import thunk from "redux-thunk";
import reduxpromise from "redux-promise";


const reducer = combineReducers({
    titleReducer

});//合并子reducer

// store 状态 不是 字符串， 是一个对象

 const store  =createStore(reducer,applyMiddleware(reduxpromise));//创建store,传一个参数是reducer

// const store = createStore(reducer,composeEnhancers(
//     applyMiddleware(thunk,reduxpromise)
// ));
//为了开发阶段 ，调试使用，
//上线之后 ，就不用了



export default store;
