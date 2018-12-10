import React, {Component} from "react";
import "./index.css";
import {Carousel, WingBlank} from 'antd-mobile';
import {NavLink} from "react-router-dom";

let Swiper = window.Swiper;

class FilmInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateFilm: [],
            timeInfo: []
        }
    }

    render() {
        return <main>
            {
                <div className="scoreNameActor">
                    <h4>{this.props.getInfo.nm}</h4>
                    {this.props.getInfo.sc != 0.0 ?
                        <span>{this.props.getInfo.sc}分</span> :<span>{this.props.getInfo.wish}人想看</span>}
                    <p>{this.props.getInfo.desc}</p>
                </div>
            }
            <div id="nav1" className="swiper-container">
                <ul className="swiper-wrapper">
                    {this.props.getInfo.length !== 0 ?
                        this.props.getInfo.shows.map(item =>

                            <li key={item.id} className="swiper-slide"
                                onClick={this.handleClickDate.bind(this, item)}>{item.dateShow}</li>
                        ) : null
                    }
                </ul>
            </div>
            <ul id="timeInfo">
                {
                    this.state.timeInfo.length!==0?
                    this.state.timeInfo.plist.map(item1=>
                        <li key={item1.showDate}>
                            <div className="div1">
                                <h6>{item1.tm}</h6>
                                <p>15:20散场</p>
                            </div>
                            <div className="div2">
                                <p>{item1.lang}&nbsp;{item1.tp}</p>
                                <p>{item1.th}</p>
                            </div>
                            <div className="div3">
                                <h5>￥{Math.ceil(item1.vipPrice / 0.85)}</h5><p>
                                <span>{item1.vipPriceName}</span><span>￥{item1.vipPrice}</span></p>
                            </div>
                            <div className="div4">
                                <button>购票</button>
                            </div>
                        </li>
                    ):null
                }
                {
                    this.props.getInfo.length !== 0 ?
                        this.props.getInfo.shows.map(item =>
                            item.plist.map(item1 =>
                                <li key={item1.showDate}>
                                    <div className="div1">
                                        <h6>{item1.tm}</h6>
                                        <p>15:20散场</p>
                                    </div>
                                    <div className="div2">
                                        <p>{item1.lang}&nbsp;{item1.tp}</p>
                                        <p>{item1.th}</p>
                                    </div>
                                    <div className="div3">
                                        <h5>￥{Math.ceil(item1.vipPrice / 0.85)}</h5><p>
                                        <span>{item1.vipPriceName}</span><span>￥{item1.vipPrice}</span></p>
                                    </div>
                                    <div className="div4">
                                        <button>购票</button>
                                    </div>
                                </li>
                            )
                        ) : null
                }
            </ul>
        </main>
    }

    handleClickDate(data) {
        console.log(data);
        this.setState({
            timeInfo: data,
            dateFilm: data.dateShow
        }, () => {
            // console.log(this.state.dateFilm);
            // console.log(this.state.timeInfo);
        })

    }


    // componentWillReceiveProps(newProps){
    // console.log(newProps);
    //     // this.handleClickDate(newProps.getInfo[0])
    // }
    componentDidUpdate() {
        new Swiper('#nav1', {
            freeMode: true,
            slidesPerView: 'auto',
            freeModeSticky: true
        });
    }


}

export default FilmInfo