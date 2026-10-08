import Styles from './App.module.scss'
import HomeAbout from './components/homeAbout/HomeAbout'
import NavBar from './components/navBar/NavBar'
import Suggest from './components/suggest/Suggest'

function App() {

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className={Styles.test__test}>
        <div id='home-about'>
          <HomeAbout/>
        </div>
        <div id='library'>
          <h2>Library</h2>
        </div>
        <div id='suggest'>
          <Suggest/>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
