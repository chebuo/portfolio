import "@google/model-viewer"
import "../styles/modelPage.css"
import kurimanju from '../assets/models/kurimanju.glb?url'

const Kurimanju=()=>{
    return(
        <>
            <div className="page-scale">
                <Header/>
                <model-viewer src={kurimanju} className="model-canvas" camera-controls autoplay></model-viewer>
                <Description/>
            </div>
        </>  
)}
const Header=()=>{
    return(
        <div>
            <h2>くりまんじゅうの3Dモデル</h2>
        </div>
    )
}
const Description=()=>{
    return(
        <div>
            <h2>使用技術</h2>
            <ul>
                <li>blender</li>
            </ul>
            <h2>制作背景</h2>
            <ul>
                <li>妹がくりまんじゅうが好きだったので、誕生日プレゼントにするために作成しました。</li>
                <li>チェブラーシカを作成する過程や動画を見て学んだ技術をうまく発揮できたのでとても満足しています。</li>
                <li>このモデルとチェブラーシカのウェイトの設定が全く違うので、待機と歩行のアニメーションを作り直しました。</li>
                <li>このモデルを作成するとき、自分がフィギアなどを持っていなかったのでネットでたくさん調べて自然に見える体系になるように調整しました。</li>
            </ul>
        </div>
    )
}
export default Kurimanju