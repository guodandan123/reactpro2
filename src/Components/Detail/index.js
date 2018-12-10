import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import Cinemaname from "../Cinemaname";
class Detail extends Component{
    constructor(){
        super()
        this.state={
            filmInfo:[]
        }
    }

    render(){
        return <main>

                    <dl className="detailFilmInfo">
                        <dt>
                            {
                                this.state.filmInfo.length!==0?
                                <img src={this.ShowImg(this.state.filmInfo.img)} alt=""/>:null
                            }
                        </dt>
                        <dd>
                            <h3>{this.state.filmInfo.nm}</h3>
                            <p>{this.state.filmInfo.enm}</p>
                            <p>{this.state.filmInfo.cat}</p>
                            <p>{this.state.filmInfo.src}{this.state.filmInfo.dur}分钟</p>
                            <p>{this.state.filmInfo.pubDesc}</p>
                        </dd>
                    </dl>
                <div id="zzz">
                <Cinemaname {...this.props}/>
                </div>
        </main>
    }
    componentDidMount(){
        console.log(this.props);
        axios.get(`/ajax/detailmovie?movieId=${this.props.match.params.detailid}`).then(res=>{
            this.setState({
                filmInfo:res.data.detailMovie
            })
        });
    }
    ShowImg(str){
        var newArr = str.split('');
        newArr.splice(22,3,'85.115');
        var newStr = newArr.join('');
        // console.log(newStr);
        return newStr;
    }
}

export default Detail