// import Styles from './App.module.scss'
import HomeAbout from './components/homeAbout/HomeAbout'
import Library from './components/library/Library'
import NavBar from './components/navBar/NavBar'
import Suggest from './components/suggest/Suggest'

function App() {

  return (
    <>
      <NavBar/>
      <main tabIndex={0} id="navBarTabDestination">
        <div id='home-about'>
          <HomeAbout/>
        </div>
        <div id='library'>
          <Library/>
        </div>
        <div id='suggest'>
          <Suggest/>
        </div>
        <button>Click me</button>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
