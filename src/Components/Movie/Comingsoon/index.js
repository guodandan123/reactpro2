import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import { Carousel, WingBlank } from 'antd-mobile';


class Comingsoon extends Component{
    constructor() {
        super();
        this.state={
            looplist:[],
            cominglist:[]
        }
    }

    render(){
        return <div>
            <h4 className="expect">近期最受期待</h4>
            <ul>
                <WingBlank>
                    <Carousel className="space-carousel"
                              frameOverflow="visible"
                              cellSpacing={15}
                              slideWidth="85px"
                              autoplay={false}
                              infinite={false}
                              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                              afterChange={index => this.setState({ slideIndex: index })}
                    >
                        {this.state.looplist.map(item=>
                            <li key={item.id} className="loopli" style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}>
                                <img src={this.ShowImg(item.img)} />
                                <p className="wishToSee">{item.wish}想看</p>
                                <p className="movieName">{item.nm}</p>
                                <p className="moviedate">{item.comingTitle}</p>
                            </li>

                        )
                        }
                    </Carousel>
                </WingBlank>
            </ul>
            <ul>
                {this.state.cominglist.map(item=>

                    <li class="comingli" key={item.id}>
                        <dl>
                            <dt><img src={this.ShowImg(item.img)}/></dt>
                            <dd><h4>{item.nm}</h4>
                                {item.sc!=0?<p>观众评<span>{item.sc}</span></p>:<p><span className="wish">{item.wish}</span>人想看</p>}
                                {item.star!=0?<p>主演：{item.star}</p>:null}
                                <p>{item.rt}上映</p></dd>
                        </dl>
                        <button>预售</button>
                    </li>
                )
                }
            </ul>
        </div>
    }


    ShowImg(str){
        var newArr = str.split('');
        newArr.splice(22,3,'85.115');
        var newStr = newArr.join('');
        // console.log(newStr);
        return newStr;
    }


    componentDidMount() {

        Promise.all([axios.get("/ajax/mostExpected?ci=65&limit=10&offset=0&token="),
            axios.get("/ajax/comingList?ci=65&token=&limit=10")]).then(res=>{
            // console.log(res);
            this.setState({
                looplist:res[0].data.coming,
                cominglist:res[1].data.coming
            })
        }).catch(error=>{
            console.log(error)
        })
    }

}

export default Comingsoon