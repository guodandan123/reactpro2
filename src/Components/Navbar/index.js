import React,{Component} from "react";
import "./index.css";
import {connect} from "react-redux";
class Navbar extends Component{


    render(){
        return <nav>
            <p>{this.props.changeTitle}</p>
        </nav>
    }


}

export default connect(
    state=>{
        console.log(state);
        return{
            changeTitle:state.titleReducer
        }
    },
    null
)(Navbar)