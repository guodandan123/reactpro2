import {
    HashRouter as Router, //as es6 导出模块重新命名
    Route, //每个单独的路径
    Redirect,//重定向
    Switch // 匹配遇到的第一个
}	from "react-router-dom";
// export {HashRouter ,Route}
import React from "react";//jsx 语法依赖react
import App from "../App";
import Cinema from "../Components/Cinema";
import Shows from "../Components/Shows";
import Detail from "../Components/Detail";
import Movie from "../Components/Movie";
import Comingsoon from "../Components/Movie/Comingsoon";
import Nowplaying from "../Components/Movie/Nowplaying";
import Personal from "../Components/Personal";

import {Provider} from "react-redux";//顶层组件，负责分发store ，
//给每个容器组件， 不需要我们自己引入store

import store from "../Redux";

const router = (
    <Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route path="/cinema" component={Cinema}/>
                <Route path="/personal" component={Personal}/>
                <Route path="/detail/:detailid" component={Detail}/>
                <Route path="/shows/:showsid" component={Shows}/>

                <Route path="/movie" render={()=>
                    <Movie>
                        <Switch>
                            <Route path="/movie/nowplaying" component={Nowplaying}/>
                            <Route path="/movie/comingsoon" component = {Comingsoon}/>
                            <Redirect from="/movie" to="/movie/nowplaying"/>
                        </Switch>
                    </Movie>
                }/>

                {/*动态路由 /:占位符*/}

                <Redirect from ="*" to="/movie"/>
            </Switch>
        </App>
    </Router>
    </Provider>
);
export default router;

// vue mode (hash , history)
// react mode( HashRouter , BrowserRouter)