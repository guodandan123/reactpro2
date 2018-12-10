import React,{Component} from "react";
import "./index.css";
import axios from "axios";
class Nowplaying extends Component{
    constructor() {
        super();
        this.state ={
            datalist:[]
        }

    }

    render(){
        return <div>
            <ul className="nowplayingUl">
                {   this.state.datalist.length!==0?
                    this.state.datalist.map(item=>

                    <li className="listli" key={item.id} onClick={this.handleClickDetails.bind(this,item.id)}>
                        <header>
                            <img src={this.ShowImg(item.img)}/>
                            <h4>{item.nm}</h4>
                            {item.sc!=0?
                            <p>观众评<span>{item.sc}</span></p>:<p><span className="wish">{item.wish}</span>人想看</p>
                        }

                            <p>主演：{item.star}</p>
                            <p>{item.showInfo}</p>
                        </header>
                        {item.globalReleased==true?
                            <button className="goupiao">购票</button>:<button className="yushou">预售</button>
                        }

                    </li>
                ):null
                }
            </ul>

        </div>
    }
    ShowImg(str){
        var newArr = str.split('');
        newArr.splice(22,3,'128.180');
        var newStr = newArr.join('');
        // console.log(newStr);
        return newStr;
    }

    componentDidMount(){

        axios.get("/ajax/movieOnInfoList?token=").then(res=>{
            // console.log(res);
            this.setState({
                datalist:res.data.movieList
            })
        })
    }

    handleClickDetails(data){
        console.log(this.props);
        this.props.history.push(`/detail/${data}`);
    }



}

export default Nowplaying

