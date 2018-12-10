import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import { Carousel, WingBlank } from 'antd-mobile';
import {NavLink }from "react-router-dom";
import FilmInfo from "../FilmInfo";
import {connect} from "react-redux";
class Shows extends Component{

    constructor(props){
        super(props);
        this.state = {
            cinemaInfo: null,
            cinemaShow: [],
            cinemaid: [],
            detailMovie: {},
            filmInfo:[]
        }
    }

    render(){

        return <section>

                {
                    this.state.cinemaInfo?
                        <div className="showsLeft">
                            <h4>
                                {this.state.cinemaInfo.nm}
                            </h4>
                            <p>
                                {this.state.cinemaInfo.addr}
                            </p>
                            <span className="place">
                                <i className="icon iconfont icon-process"/>
                            </span>
                        </div>
                        :null
                }
                {
                        <ul>
                            <WingBlank>
                                <Carousel className="space-carousel"
                                          frameOverflow="visible"
                                          cellSpacing={10}
                                          slideWidth={0.25}
                                          // autoplay
                                          swipeSpeed={30}
                                          // passiveListeners: false
                                          // infinite
                                          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                          afterChange={index => this.setState({ slideIndex: index })}
                                >
                            {
                                this.state.cinemaShow.map(item=>

                                    this.state.cinemaShow?
                                        <li key={item.id} onClick={this.handleClickLi.bind(this,item.id,item)}>
                                            <img src={this.ShowImg(item.img)} style={{ width: '75px', verticalAlign: 'top' }}
                                                 onLoad={() => {
                                                     // fire window resize event to change height
                                                     window.dispatchEvent(new Event('resize'));
                                                     this.setState({ imgHeight: 'auto' });
                                                 }}/>
                                        </li>:null
                                )

                            }

                                </Carousel>
                            </WingBlank>
                        </ul>
                }
                <FilmInfo getInfo={this.state.filmInfo}{...this.props}/>
        </section>
    }

    componentDidMount(){
        axios.get(`/ajax/cinemaDetail?cinemaId=${this.props.match.params.showsid}`).then(res=>{
         // console.log(res.data.showData.movies[0].desc);
            this.setState({
                cinemaInfo:res.data.cinemaData,
                cinemaShow:res.data.showData.movies,
                cinemaid:res.data.cinemaId
            });

            this.handleClickLi(res.data.showData.movies[0].id,res.data.showData.movies[0]);


            this.props.changeTitle(res.data.cinemaData.nm);
        });
    }

    ShowImg(str){
        var newArr = str.split('');
        newArr.splice(22,3,'75.110');
        var newStr = newArr.join('');
        // console.log(newStr);
        return newStr;
    }
    handleClickLi(data,data1){

        this.setState({
            filmInfo:data1
        },()=>{
        });
        this.props.history.push(`/shows/${this.state.cinemaid}?$from=canary#movieId${data}`);
    }

}

export default connect(
    null,
    {
        changeTitle(data){
            return{
                type:"changeTitle",
                payload:data
            }
        }
    }
)(Shows);