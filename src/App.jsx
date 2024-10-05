import './App.css';
import Card from './Card.jsx';

function App() {

  return (
    <>
      <div>
        <h1>KOUのこれまでの作品一覧</h1>
        <table>
          <tbody>
          <tr>
            <td>
              <div className="l-wrapper card">
              <Card
              img="/img/FKRPG.png"
              title="FK大RPG"
              text="KOU初作品<br />立花祭に出店したい一心で１週間ほどで作成したゲームバランスが終わっているゲーム"
              />
              <div className="card-link">
                <a href="#">GitHub</a>
                <a href="download/福工大RPG.exe" download="FK大RPG.exe">インストールexeダウンロード</a>
                <a href="#">リンク２</a>
              </div>
              </div>
            </td>

            <td>
            <div className="l-wrapper card">
            <Card
              img="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg"
              title="ウイルスバスター"
              text="Unityのネコ本を履修後初作品<br />クリックでウイルスを消そう！"
              />
              <div className="card-link">
                <a href="#">GitHub</a>
                <a href="#">りんく</a>
                <a href="#">りんく２</a>
              </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="l-wrapper card">
                <Card
                  img="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg"
                 title="生き残れ！クリオネちゃん"
                  text="Unity２作目（１年生２月ごろ）<br />フラッピーバードをつくろう的なやつ丸パクリ"
                />
                <div className="card-link">
                  <a href="#">GitHub</a>
                  <a href="#">りんく</a>
                  <a href="#">りんく２</a>
                </div>
              </div>
            </td>
            <td>
            <div className="l-wrapper card">
                <Card
                  img="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg"
                 title="ポージングエフェクト"
                  text="ハックツハッカソン ステゴカップにて作成（2年生5月ごろ）<br />PythonとUnityを繋げて作った。MediaPipeでポーズ推定したよ"
                />
              <div className="card-link">
                <a href="https://github.com/jyogi-web/sutego_PosingEffect">GitHub</a>
                <a href="https://topaz.dev/projects/6dd69986efee3f535106">Topaz</a>
              </div>
            </div>
            </td>
          </tr>
          <tr>
            <td>
            <div className="l-wrapper card">
                <Card
                  img="/img/renkin_title.png"
                 title="人から作る？！錬金クッキング"
                  text="第２回福岡学生ゲームジャムにて作成<br />stage1とステージの統合を担当/Unityのチーム開発それぞれのコードを見ないといけなくて大変だった"
                />
              <div className="card-link">
                <a href="#">GitHubなんてないよ</a>
                <a href="https://unityroom.com/games/gamejam_2024_08_22_01">UnityRoom</a>
              </div>
            </div>
            </td>

            <td>
            <div className="l-wrapper card">
                <Card
                  img="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg"
                 title="ジャストエイサー"
                  text="第2回やんばるハッカソン＆ハックツハッカソンにて作成<br />Joyconを担当したがバックエンドとの接続や非同期処理難しい"
                />
              <div className="card-link">
                <a href="https://github.com/jyogi-web/yanbaru-back-mediapipe">GitHub(メイン)</a>
                <a href="https://topaz.dev/projects/3cacf9e968739f90fbe8">Topaz</a>
                <a href="https://yanabaru-e2dbfbhjdzd0gpg0.japaneast-01.azurewebsites.net/">デプロイ先</a>
              </div>
            </div>
            </td>
          </tr>
          {/* この下に作品を追加 */}
          {/* <tr>
            <td>
              <div className="l-wrapper card">
                <Card
                  img="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg"
                 title="XXXXXX"
                  text="XXXXXXXXXXXXXX"
                />
                <div className="card-link">
                  <a href="#">GitHub</a>
                  <a href="#">りんく</a>
                  <a href="#">りんく２</a>
                </div>
              </div>
            </td>

            <td>
            <div className="l-wrapper">
            <div className="card">
            <Card
              img="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg"
              title="XXXXXX"
              text="XXXXXXXXXXXXXX"
              />
              <div className="card-link">
                <a href="#">GitHub</a>
                <a href="#">りんく</a>
                <a href="#">りんく２</a>
              </div>
              </div>
              </div>
            </td>
          </tr> */}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App