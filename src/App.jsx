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
              <p class="card-title">DUB DESiGN</p>
              <p class="card-text">WebデザインやWebサイト制作、最新のWeb業界情報などを紹介していくサイト。<br />しっかりきっかり更新中。</p>
            </div>
            <div class="card-link">
              <a href="#">HOME</a>
              <a href="#">FAQ</a>
              <a href="#">PRIVACY</a>
            </div>
          </div>
          </div>
          </td>
          <td>
          <div class="l-wrapper">
          <div class="card">
            <img class="card-img" src="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg" alt="" />
            <div class="card-content">
              <p class="card-title">DUB DESiGN</p>
              <p class="card-text">WebデザインやWebサイト制作、最新のWeb業界情報などを紹介していくサイト。<br />しっかりきっかり更新中。</p>
            </div>
            <div class="card-link">
              <a href="#">HOME</a>
              <a href="#">FAQ</a>
              <a href="#">PRIVACY</a>
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
              <p class="card-title">DUB DESiGN</p>
              <p class="card-text">WebデザインやWebサイト制作、最新のWeb業界情報などを紹介していくサイト。<br />しっかりきっかり更新中。</p>
            </div>
            <div class="card-link">
              <a href="#">HOME</a>
              <a href="#">FAQ</a>
              <a href="#">PRIVACY</a>
            </div>
          </div>
          </div>
          </td>
          <td>
          <div class="l-wrapper">
          <div class="card">
            <img class="card-img" src="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg" alt="" />
            <div class="card-content">
              <p class="card-title">DUB DESiGN</p>
              <p class="card-text">WebデザインやWebサイト制作、最新のWeb業界情報などを紹介していくサイト。<br />しっかりきっかり更新中。</p>
            </div>
            <div class="card-link">
              <a href="#">HOME</a>
              <a href="#">FAQ</a>
              <a href="#">PRIVACY</a>
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
              <p class="card-title">DUB DESiGN</p>
              <p class="card-text">WebデザインやWebサイト制作、最新のWeb業界情報などを紹介していくサイト。<br />しっかりきっかり更新中。</p>
            </div>
            <div class="card-link">
              <a href="#">HOME</a>
              <a href="#">FAQ</a>
              <a href="#">PRIVACY</a>
            </div>
          </div>
          </div>
          </td>
          <td>
          <div class="l-wrapper">
          <div class="card">
            <img class="card-img" src="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg" alt="" />
            <div class="card-content">
              <p class="card-title">DUB DESiGN</p>
              <p class="card-text">WebデザインやWebサイト制作、最新のWeb業界情報などを紹介していくサイト。<br />しっかりきっかり更新中。</p>
            </div>
            <div class="card-link">
              <a href="#">HOME</a>
              <a href="#">FAQ</a>
              <a href="#">PRIVACY</a>
            </div>
          </div>
          </div>
          </td>
        </tr>
        </table>
      </div>
    </>
  )
}

export default App
