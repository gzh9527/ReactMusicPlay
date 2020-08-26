import React from 'react';


export default class Lrc extends React.Component {
    constructor() {
        super();
        this.swiper=null;
        this.state = {
            timeList: [],
            lrcList: [],
            cont:0,
            lrc: `[00:03.21]七夕
            [00:04.41]作词：许嵩
            [00:05.58]作曲：许嵩
            [00:08.05]演唱：许嵩
            [00:08.87]
            [00:22.96]江畔暮雨纷纷 夕阳西沉
            [00:26.59]津渡烛影深深 是我在等
            [00:30.32]你歌声犹绕耳 清风在侧
            [00:33.69]恍然发觉 琴案已蒙尘
            [00:37.15]
            [00:52.91]当日罗带轻分 缘定今生
            [00:56.48]时光一去如梭 似你穿针
            [01:00.25]魁星未拜 禅门苔上屐痕
            [01:03.88]到访三五痴心人
            [01:07.93]
            [01:11.61]夜幕垂 鹊桥会 七夕的念想
            [01:15.26]皎月归 我轻随 烟火对影赏
            [01:18.97]小城老街上 有情人执手同徜徉
            [01:25.06]
            [01:26.45]夜幕垂 鹊桥会 七夕的念想
            [01:30.27]你没归 我独醉 情话无人讲
            [01:34.08]也就不用讲 且把浓情化作诗两行
            [01:40.64]
            [01:56.66]江畔暮雨纷纷 夕阳西沉
            [02:00.29]津渡烛影深深 是我在等
            [02:04.11]你歌声犹绕耳 清风在侧
            [02:07.83]琴案已蒙尘
            [02:10.84]
            [02:11.94]当日罗带轻分 缘定今生
            [02:15.30]时光一去如梭 似你穿针
            [02:19.01]魁星未拜 禅门苔上屐痕
            [02:22.60]到访三五痴心人
            [02:26.98]
            [02:30.32]夜幕垂 鹊桥会 七夕的念想
            [02:33.99]皎月归 我轻随 烟火对影赏
            [02:37.71]小城老街上 有情人执手同徜徉
            [02:44.21]
            [02:45.27]夜幕垂 鹊桥会 七夕的念想
            [02:49.02]你没归 我独醉 情话无人讲
            [02:52.78]也就不用讲 且把浓情化作诗两行
            [02:59.35]
            [03:00.28]夜幕垂 鹊桥会 七夕的念想
            [03:04.02]皎月归 我轻随 烟火对影赏
            [03:07.79]小城老街上 有情人执手同徜徉
            [03:14.43]
            [03:15.35]夜幕垂 鹊桥会 七夕的念想
            [03:19.02]你没归 我独醉 情话无人讲
            [03:22.72]也就不用讲 且把浓情化作诗两行
            [03:29.76]`
        }
    }
    //处理歌词  componentDidMount是在渲染完执行
    componentDidMount() {
        let timeList = [];
        let lrcList = [];
        //console.log( this.state.lrc.split('\n'))
        let arr = this.state.lrc.split('\n');
        arr.forEach(item => {
            let arr = item.split(']');
            console.log(arr,'........arr')
            console.log(arr[1],'......arr2')
            if (arr[1]) {
                //处理时间
                let time = arr[0].split('[')[1].replace('.', ':');
                let timeArr = time.split(':');
                console.log(timeArr,'......timeArr')
                //把时间转化成毫秒
                timeList.push(timeArr[0] * 60000 + timeArr[1] * 1000)
                console.log(timeList,'......timeList')
                lrcList.push(arr[1])
                console.log(lrcList,'......lrcList')
            }

        })
        // console.log(timeList, lrcList);
        this.setState({
            timeList,
            lrcList
        },()=>{
           this.swiper = new window.Swiper('.banner',{
                autoplay:false,
                direction:'vertical'
            })
        })
    }

         componentWillReceiveProps(){
            console.log(this.props.time*1000)
            if(this.props.time*1000 >= this.state.timeList[this.state.cont+1]){
                this.setState({
                    cont:this.state.cont+1
                },()=>{
                    this.swiper.slideNext()
                })
            }
        }

    render() {

        return <div className="swiper-container banner">
            <div className="swiper-wrapper banners">
             {
                this.state.lrcList.map((items, index) => {
                return <div className="swiper-slide bannerson" style={{height:10+'px'}} key={index}>{items}</div>
                })
            }
            </div>
        </div>
    }
}