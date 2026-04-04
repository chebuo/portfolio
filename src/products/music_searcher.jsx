import {Swiper,SwiperSlide} from "swiper/react";
import { Pagination, Mousewheel,Keyboard,Navigation,  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/gamePage.css"
import "../styles/slidePage.css"

import slide_1 from '../assets/music_searcher_1.png'
import slide_2 from '../assets/music_searcher_2.png'
import slide_3 from '../assets/music_searcher_3.png'
import slide_4 from '../assets/music_searcher_4.png'
import slide_5 from '../assets/music_searcher_5.png'
import slide_6 from '../assets/music_searcher_6.png'

const Music_searcher=()=>{
    return(
        <>
            <div className="page-scale">
                <Header/>
                <SlideViewer/>
                <Description/>
            </div>
        </>  
)}
const Header=()=>{
    return(
        <div>
            <h2>MusicSearcher</h2>
        </div>
    )
}
const Description=()=>{
    return(
        <div>
            <h2>作品概要</h2>
            <ul>
                <li>好きな音楽のジャンルを設定して、そのジャンルに合った音楽を検索できるWebアプリです。</li>
                <li></li>
            </ul>
            <h2>使用技術</h2>
            <ul>
                <li>React,JavaScript,express,last.fm API,Cloud flare Pages</li>
            </ul>
            <h2>制作背景</h2>
            <ul>
                <li>このアプリ開発で初めてReactをしました。</li>
                <li></li>
            </ul>
        </div>
    )
}

const SlideViewer=()=>{
    const data = [slide_1, slide_2, slide_3,slide_4,slide_5,slide_6];
    return(
        <Swiper
            slidesPerView={1}
            navigation={true}
            Keyboard={true}
            Mousewheel={true}
            pagination={{
                clickable:true,
            }}
            modules={[Pagination,Mousewheel,Keyboard,Navigation]}
            >
                {data.map((d,i)=>(
                    <SwiperSlide key={i}>
                        <img src={d}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        )
}
export default Music_searcher