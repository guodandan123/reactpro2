import React,{Component} from "react";
import "./index.css";
import {NavLink }from "react-router-dom";

class Footbar extends Component{

    render(){
        return <footer>
            <ul id="footUl">
                <li><NavLink to="/movie" activeClassName="activeFoot"><p><i className="icon iconfont icon-electronics"/></p><p>电影</p></NavLink></li>
                <li><NavLink to="/cinema" activeClassName="activeFoot"><p><i className="icon iconfont icon-video"/></p><p>影院</p></NavLink></li>
                <li><NavLink to="/personal" activeClassName="activeFoot"><p><i className="icon iconfont icon-account"/></p><p>我的</p></NavLink></li>
            </ul>

        </footer>
    }


}

export default Footbar