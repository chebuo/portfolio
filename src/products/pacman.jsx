import "@google/model-viewer"
import "../styles/modelPage.css"
import pacman from '../assets/models/PAC-MAN.glb?url'

const Pacman=()=>{
    return(
        <>
            <div className="page-scale">
                <Header/>
                <model-viewer src={pacman} className="model-canvas" camera-controls autoplay></model-viewer>
                <Description/>
            </div>
        </>  
)}
const Header=()=>{
    return(
        <div>
            <h2>PAC-MANの3Dモデル</h2>
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
                <li>同じ部活の友達にBlenderを使っている人がいて、面白そうだと思い作成しました。</li>
                <li>PAC-MANにした理由は、好きなキャラクターで一番作りやすそうだったからです。</li>
                <li>モデリングが終わった後、ボーンを入れてアニメーションを付けようと思っていたのですが、</li>
                <li>想定より動かすのが難しくて諦めてしまいました。</li>
                <li>しかし、モデリングを始める良いきっかけになりました。</li>
            </ul>
        </div>
    )
}
export default Pacman