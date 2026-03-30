import {Unity,useUnityContext}from 'react-unity-webgl'
import "../styles/gamePage.css"

const Bigbeetle_full=()=>{
    const {unityProvider,requestFullscreen}=useUnityContext({
        loaderUrl:"build/bigbeetle.loader.js",
        dataUrl:"build/bigbeetle.data",
        frameworkUrl:"build/bigbeetle.framework.js",
        codeUrl:"build/bigbeetle.wasm",
    })
    return(
        <>
            <div className="page-scale">
                <Header/>
                <Unity unityProvider={unityProvider} className="unity-canvas" />
                <Description onFullscreen={()=>requestFullscreen(true)}/>
            </div>
        </>  
)}
const Header=()=>{
    return(
        <div>
            <h2>大きなカブとムシ 完全版</h2>
        </div>
    )
}
const Description=({onFullscreen})=>{
    return(
        <div>
            <button onClick={onFullscreen} className="fullscreen-button">全画面で遊ぶ</button>
            <h2>ゲーム概要</h2>
            <ul>
                <li>大きなカブとムシというダジャレを思いついて作成しました。</li>
                <li>チュートリアルと通常ステージの全部で10ステージあります。</li>
                <li>章ごとに新しいキャラが登場します。</li>
                <li>後半になると、かなり難易度が高くなります。</li>
                <li>今後、やられるまで終わらないエンドレスモードを追加しようと思っています。</li>
            </ul>
            <h2>操作説明</h2>
            <ul>
                <li>タップ操作には対応していません。</li>
                <li>キーボード、コントローラのみ対応しています。</li>
                <li>十字キー、左スティックで移動、選択</li>
                <li>C,下ボタンで通常弾を発射</li>
                <li>Z,右ボタンを短押しでとまと爆弾を発射</li>
                <li>Z,右ボタンを長押しでかぼちゃ爆弾を発射</li>
            </ul>
            <h2>使用技術</h2>
            <ul>
                <li>unity,UI Tool Kit,object pool,scriptableObject,Input System</li>
            </ul>
            <h2>制作背景</h2>
            <ul>
                <li>β版を作って文化祭でたくさんの人が楽しそうに遊んでいるところを見て、完全版を作ることにしました。</li>
                <li>完全版を作るにあたって、二作品目だったこともありコードが汚かったので、設計から見直しをしました。</li>
                <li>具体的に何をしたかというと、scriptableObjectを使用して、敵キャラクター、ステージをInspector上で管理できるようにしたり、</li>
                <li>object poolを使用して敵の生成、破棄の処理を効率化したりしました。</li>
                <li>個人的に好きなのが、ステージのデータ管理をするときにつかった、classが入ったclassのlistです。</li>
                <li>これによって、ワールドのデータlistの中にステージリストが入るので、一つのlistで全てのステージを管理できるようになりました。</li>
                <li>なぜ、二重配列ではないのかというと、unityのInspectorに写らないからです。</li>
                <li>最初の理由は使えないからでしたが、今ではclassのlistだと変数名がコードでわかるので、可読性が向上してかなり満足しています。</li>
                <li>最後に難易度調整についてです。</li>
                <li>前半のステージに比べて後半のステージの難易度が高くなりすぎたと感じています。</li>
                <li>いきなり難しくなったことによって、プレイヤーは何で死んだかわからず、再挑戦する機会が減ってしまいます。</li>
                <li>たくさんの人にデバッグしてもらってう重要性を実際に認識することができました。</li>
            </ul>
        </div>
    )
}
export default Bigbeetle_full