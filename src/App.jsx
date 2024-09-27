import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>KOUのこれまでの作品一覧</h1>
        <table>
        <tr>
          <td>
          <div class="l-wrapper">
          <div class="card">
            <img class="card-img" src="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg" alt="" />
            <div class="card-content">
              <p class="card-title">FK大 RPG</p>
              <p class="card-text">KOU初作品<br />立花祭に出店したい一心で１週間ほどで作成したゲームバランスが終わっているゲーム</p>
            </div>
            <div class="card-link">
              <a href="#">GitHub</a>
              <a href="#">リンク</a>
              <a href="#">リンク２</a>
            </div>
          </div>
          </div>
          </td>
          <td>
          <div class="l-wrapper">
          <div class="card">
            <img class="card-img" src="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg" alt="" />
            <div class="card-content">
              <p class="card-title">ウイルスバスター</p>
              <p class="card-text">Unityのネコ本を履修後初作品<br />クリックでウイルスを消そう！</p>
            </div>
            <div class="card-link">
              <a href="#">GitHub</a>
              <a href="#">りんく</a>
              <a href="#">りんく２</a>
            </div>
          </div>
          </div>
          </td>
        </tr>
        <tr>
          <td>
          <div class="l-wrapper">
          <div class="card">
            <img class="card-img" src="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg" alt="" />
            <div class="card-content">
              <p class="card-title">生き残れ！クリオネちゃん</p>
              <p class="card-text">Unity２作目（１年生２月ごろ）<br />フラッピーバードをつくろう的なやつ丸パクリ</p>
            </div>
            <div class="card-link">
              <a href="#">GitHub</a>
              <a href="#">りんく</a>
              <a href="#">りんく２</a>
            </div>
          </div>
          </div>
          </td>
          <td>
          <div class="l-wrapper">
          <div class="card">
            <img class="card-img" src="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg" alt="" />
            <div class="card-content">
              <p class="card-title">ポージングエフェクト</p>
              <p class="card-text">ハックツハッカソン ステゴカップにて作成（2年生5月ごろ）<br />PythonとUnityを繋げて作った。MediaPipeでポーズ推定したよ</p>
            </div>
            <div class="card-link">
              <a href="https://github.com/jyogi-web/sutego_PosingEffect">GitHub</a>
              <a href="https://topaz.dev/projects/6dd69986efee3f535106">Topaz</a>
            </div>
          </div>
          </div>
          </td>
        </tr>
        <tr>
          <td>
          <div class="l-wrapper">
          <div class="card">
            <img class="card-img" src="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg" alt="" />
            <div class="card-content">
              <p class="card-title">人から作る？！錬金クッキング</p>
              <p class="card-text">第２回福岡学生ゲームジャムにて作成<br />stage1とステージの統合を担当/Unityのチーム開発それぞれのコードを見ないといけなくて大変だった</p>
            </div>
            <div class="card-link">
              <a href="#">GitHubなんてないよ</a>
              <a href="https://unityroom.com/games/gamejam_2024_08_22_01">UnityRoom</a>
            </div>
          </div>
          </div>
          </td>
          <td>
          <div class="l-wrapper">
          <div class="card">
            <img class="card-img" src="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg" alt="" />
            <div class="card-content">
              <p class="card-title">ジャストエイサー</p>
              <p class="card-text">第2回やんばるハッカソン＆ハックツハッカソンにて作成<br />Joyconを担当したがバックエンドとの接続や非同期処理難しい</p>
            </div>
            <div class="card-link">
              <a href="https://github.com/jyogi-web/yanbaru-back-mediapipe">GitHub(メイン)</a>
              <a href="https://topaz.dev/projects/3cacf9e968739f90fbe8">Topaz</a>
              <a href="https://yanabaru-e2dbfbhjdzd0gpg0.japaneast-01.azurewebsites.net/">デプロイ先</a>
            </div>
          </div>
          </div>
          </td>
        </tr>
        {/* この下に作品を追加 */}
        {/* <tr>
          <td>
          <div class="l-wrapper">
          <div class="card">
            <img class="card-img" src="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg" alt="" />
            <div class="card-content">
              <p class="card-title">人から作る？！錬金クッキング</p>
              <p class="card-text">第２回福岡学生ゲームジャムにて作成<br />stage1とステージの統合を担当/Unityのチーム開発それぞれのコードを見ないといけなくて大変だった</p>
            </div>
            <div class="card-link">
              <a href="#">GitHubなんてないよ</a>
              <a href="https://unityroom.com/games/gamejam_2024_08_22_01">UnityRoom</a>
            </div>
          </div>
          </div>
          </td>
          <td>
          <div class="l-wrapper">
          <div class="card">
            <img class="card-img" src="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg" alt="" />
            <div class="card-content">
              <p class="card-title">ジャストエイサー</p>
              <p class="card-text">第2回やんばるハッカソン＆ハックツハッカソンにて作成<br />Joyconを担当したがバックエンドとの接続や非同期処理難しい</p>
            </div>
            <div class="card-link">
              <a href="https://github.com/jyogi-web/yanbaru-back-mediapipe">GitHub(メイン)</a>
              <a href="https://topaz.dev/projects/3cacf9e968739f90fbe8">Topaz</a>
              <a href="https://yanabaru-e2dbfbhjdzd0gpg0.japaneast-01.azurewebsites.net/">デプロイ先</a>
            </div>
          </div>
          </div>
          </td>
        </tr> */}
        </table>
      </div>
    </>
  )
}

export default App