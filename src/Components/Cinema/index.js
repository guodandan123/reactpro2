import React,{Component} from "react";
import "./index.css";
import Footbar from "../Footbar";
import Cinemaname from "../Cinemaname";
import {connect} from "react-redux";
class Cinema extends Component{

    render(){
        return <article>
                <div id="cinemaDiv">
                    <span>大连<i className="icon iconfont icon-moreunfold"/></span>
                    <div id="cinemaSearch">
                        <i className="icon iconfont icon-search"/>
                        <input type="text" placeholder="搜电影"/>
                    </div>
                </div>
            <Footbar/>
            <Cinemaname
                        {...this.props}/>

        </article>
    }
    componentDidMount(){
        this.props.changeTitle();
    }

}

export default connect(
    null,
    {
        changeTitle(){
            return{
                type:"changeTitle",
                payload:"影院"
            }
        }
    }
)(Cinema)