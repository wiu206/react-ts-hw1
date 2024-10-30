import './App.css'
import wei from './assets/wei.jpg'
function App() {

  return (
    <main>
      <h1>歡迎來到威伍的網站!</h1>
        <p>這裡可以馬上了解我</p>
        <table>
            <tr>
                <th>名稱</th>
                <th>年齡</th>
            </tr>
            <tr>
                <td>陳威伍</td>
                <td>20</td>
            </tr>
        </table>
        <strong>這是重要的內容。</strong>
        <em>其實也還好</em>
        <h2>我的網圖</h2>
        <p>我最滿意的照片</p>
        <img src={ wei } alt="是我!" />
        <h2>我的IG</h2>
        <a href="https://www.instagram.com/">哈嚕</a>
        <h2>個人特色</h2>
        <ul>
            <li>內向</li>
            <li>挑食</li>
            <li>哥布林</li>
        </ul>
        <form action="/submit" method="post">
            <label form="name">有什麼想問的 歡迎留言:</label>
            <input type="text" id="name" name="name"/>
            <input type="submit" value="提交"/>
        </form>
        <span>謝謝大家</span>
    </main>
  )
}

export default App
