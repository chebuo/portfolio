import "@google/model-viewer"
import "../styles/modelPage.css"
import kirby from '../assets/models/kirby.glb?url'

const Kirby=()=>{
    return(
        <>
            <div className="page-scale">
                <Header/>
                <model-viewer src={kirby} className="model-canvas" camera-controls autoplay></model-viewer>
                <Description/>
            </div>
        </>  
)}
const Header=()=>{
    return(
        <div>
            <h2>カービィの3Dモデル</h2>
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
                <li>自分が好きで人形を持っていたので、作りやすそうと思い作成しました。</li>
                <li>ぬいぐるみに近づけるためにparticleを使って毛並み感を表現していたのですが、</li>
                <li>自分のPCだと動作が重くなってしまったので、普通の見た目にしました。</li>
                <li>このモデル作成で初めて、テクスチャペイントをしてマテリアルの模様の幅が広がりました。</li>
            </ul>
        </div>
    )
}
export default Kirby