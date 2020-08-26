import React from 'react';
import Lrc from './lrc.jsx';
import '../css/style.css';
import '../css/CSS.css'
export default class Music extends React.Component {
    constructor() {
        super();
        this.cont = 0,
            this.state = {
                time: 0,
                suspend: false
            }
    }
    componentDidMount() {
        this.roote()
        let audio_f = document.getElementsByTagName("audio")[0];
        let that = this
        audio_f.addEventListener("play", function () {   //开始播放时触发
            that.setState({
                suspend: true
            })
            that.isPlay()
        });
        audio_f.addEventListener("pause", function () {   // 暂停时会触发，当播放完一首歌曲时也会触发
            that.setState({
                suspend: false
            })
            that.isPlay()
        })
        audio_f.addEventListener("ended", function () {
            console.log("pause---ednded")
            audio_f.pause();
        }, false);
    }
    isPlay() {
        console.log(this.state.suspend, '.this.state.suspendthis.state.suspend')
        let setinv = setInterval(() => {
            if (this.state.suspend) {
                this.state.time += 1
                this.setState({
                    time: this.state.time
                })
            } else {
                clearInterval(setinv)
            }
        }, 1000)
    }
    roote() {
        let wrapper = document.getElementById('wrap')
        setInterval(() => {
            this.cont += 0.1;
            wrapper.style.transform = "rotate(" + this.cont + "deg)";
        }, 10)
    }

    render() {
        return <div className="wrapper">
            <h6><b>❤</b>王小姐滴七夕电台 :)</h6>
            <div className="pic" id="wrap">
                <img src="img/bt.jpg"></img>
            </div>
            <div className="marquee">
            <marquee scrollamount="2" scrolldelay='5'>匠心制作666</marquee>
            <marquee scrollamount="2" scrolldelay='10'>为作者点个赞</marquee>
            <marquee scrollamount="2" scrolldelay='14'>这可太6了我女朋友也想要一个</marquee>
            <marquee scrollamount="2" scrolldelay='19'>这可比口红面膜香多了</marquee>
            <marquee scrollamount="2" scrolldelay='8'>嘤嘤嘤</marquee>
            </div>
            <h2>七夕</h2>
            <h2>演唱：许嵩(Vae)</h2>
            <p className="audios"><span className="mask"></span><audio onChange={() => this.suspend()} webkit-playsinline="true" controls="controls" autoplay="true" src='img/qixi.mp3'></audio></p>
            <Lrc time={this.state.time} />
            <div className="cube">
                <span className="in_front">
                    <img src="img/t.jpg" className="in_pic" />
                </span>
                <span className="in_back">
                    <img src="img/t1.jpg" className="in_pic" />
                </span>
                <span className="in_left">
                    <img src="img/t5.jpg" className="in_pic" />
                </span>
                <span className="in_right">
                    <img src="img/t2.jpg" className="in_pic" />
                </span>
                <span className="in_top">
                    <img src="img/t3.jpg" className="in_pic" />
                </span>
                <span className="in_bottom">
                    <img src="img/t4.jpg" className="in_pic" />
                </span>
            </div>
        </div>
    }
}