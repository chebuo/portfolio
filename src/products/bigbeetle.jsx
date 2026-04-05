import "../styles/gamePage.css"

const Bigbeetle=()=>{
    return(
        <>
            <div className="page-scale">
                <Header/>
                <Description/>
            </div>
        </>  
)}
const Header=()=>{
    return(
        <div>
            <h2>大きなカブトムシ β版</h2>
        </div>
    )
}
const Description=()=>{
    const gamePage=()=>window.open("https://unityroom.com/games/bigbeetle_beta","_blank")
    return(
        <div>
            <button onClick={gamePage} className="fullscreen-button">別ページへ</button>
            <h2>ゲーム概要</h2>
            <ul>
                <li>大きなカブが食べられないようにカブトムシを撃退するシューティングゲームです。</li>
                <li>β版をenableでビルドしていなかったので、unityroomに公開したものを使っています。</li>
            </ul>
            <h2>操作説明</h2>
            <ul>
                <li>タッチ操作は対応していません。</li>
                <li>キーボードのみ対応しています。</li>
                <li>十字キーで移動、スペースキーで通常弾を発射します。</li>
                <li>Fキー短押しでとまと爆弾を発射します。</li>
                <li>Fキー長押しでかぼちゃ爆弾を発射します。</li>
            </ul>
            <h2>使用技術</h2>
            <ul>
                <li>unity,particle</li>
            </ul>
            <h2>制作背景</h2>
            <ul>
                <li>大きなカブとムシというダジャレを思いついて作成しました。</li>
                <li>通常弾をparticleで作っています。</li>
                <li>particleを採用した理由は、オブジェクトを一つ一つ生成するより、</li>
                <li>一つのオブジェクトからparticleを出してまとめて管理するほうが楽だと考えたからです。</li>
                <li>ですが、情報を集めていくうちに問題があることがわかりました。</li>
                <li>それは旧particleがCPUを使って処理を行っているということです。</li>
                <li>なので、非常に負荷がかかります。</li>
                <li>次からはVisual Effect Graphか、object poolを使用しようと思います。</li>
            </ul>
        </div>
    )
}
export default Bigbeetle