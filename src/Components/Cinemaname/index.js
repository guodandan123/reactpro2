import React,{Component} from "react";
import "./index.css";
// import "./cinema.css";
import axios from "axios";
class Cinemaname extends Component{

    constructor(props){
        super(props);
        this.state={
            cinemaList:[],
            cityList:[]

        }
    }
    render(){
        return <article>
            <ul className="cinemaNameThree" id="cinemaNameThree1">
                <li onClick={this.handleClickCity.bind(this)}><span>全城<i className="icon iconfont icon-moreunfold"/></span></li>
                <li><span>品牌<i className="icon iconfont icon-moreunfold"/></span></li>
                <li><span>特色<i className="icon iconfont icon-moreunfold"/></span></li>
            </ul>
            <ul id="cinemaNameList">
                {this.state.cinemaList.length!==0?
                    this.state.cinemaList.map(item=>

                        <li key={item.id} onClick={this.handleClick.bind(this,item.id)}>
                            <h4>{item.nm}<span className="priceSpan">{item.sellPrice}元起</span></h4>
                            <p className="addr">{item.addr}</p><span className="distance">{item.distance}</span>
                            {
                                item.tag.hallType && item.tag.hallType.map(item1=>
                                        <span className="room">{item1}</span>
                                    )
                            }

                        </li>
                    ):null
                }
            </ul>
        </article>
    }

    componentDidMount(){
        axios.get("/ajax/cinemaList?day=2018-08-13&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1534152250439&cityId=65").then(res=>{

            this.setState({
                cinemaList:res.data.cinemas,

            })
        });
        axios.get("/ajax/filterCinemas?ci=65").then(res=>{
                console.log(res.data.district);
        });
    }

    handleClick(data){
        // console.log(this.props);
        this.props.history.push(`/shows/${data}`);
    }
    handleClickCity(){

    }


}

export default Cinemaname;