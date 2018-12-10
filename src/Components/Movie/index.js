import React,{Component} from "react";
import "./index.css";
import {NavLink }from "react-router-dom";
import Footbar from "../Footbar";
import {connect} from "react-redux";
class Movie extends Component{


    render(){
        return <div>
            <ul id="playingUl">
                <li>大连<i className="icon iconfont icon-moreunfold"/></li>
                <li><NavLink to="/movie/nowplaying" activeClassName="active">正在热映</NavLink></li>
                <li><NavLink to="/movie/comingsoon" activeClassName="active">即将上映</NavLink></li>
                <li><i className="icon iconfont icon-search"/></li>
            </ul>
            {
                this.props.children
            }
            <Footbar/>
        </div>
    }
    componentDidMount(){
        this.props.changeTitle();
    }


}

export default connect(
    null,{
        changeTitle(){
            return{
                type:"changeTitle",
                payload:"猫眼电影"
            }
        }
    }
)(Movie)