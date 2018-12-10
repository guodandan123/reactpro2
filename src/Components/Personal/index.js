import React,{Component} from "react";
import "./index.css";
import Footbar from "../Footbar";

// import Background from '../../../background.png';

// var sectionStyle = {
//   width: "100%",
//   height: "150px",
// // makesure here is String确保这里是一个字符串，以下是es6写法
//   backgroundImage: `url(${Background})`
// };
class Personal extends Component{
    render(){
        return <div id="all">
            <div className="header">
                <img src="../../../profile.png"/>
                <div className="name">Spirit_Moon</div>
            </div>
            <div className="order">
                <h4>我的订单</h4>
                <div className="line"></div>
                <div className="order_list">
                    <div className="film">
                        <img src="../../../film.png"/>
                        <p>电影</p>
                    </div>
                    <div className="shop">
                        <img src="../../../shop.png"/>
                        <p>商城</p>
                    </div>
                </div>
            </div>
            <ul className="group">
                <li>优惠卡</li>
                <li>折扣卡</li>
            </ul>
        <Footbar/>
        </div>
    }


}

export default Personal