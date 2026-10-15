// import Styles from './App.module.scss'
import ContactForm from './components/contactForm/ContactForm'
import HomeAbout from './components/homeAbout/HomeAbout'
import Library from './components/library/Library'
import NavBar from './components/navBar/NavBar'

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
        <div id='contact'>
          <ContactForm/>
        </div>
      </main>
      <footer>
        <span>Developed by Alma Isaksson | 2026</span>
        <span>Email: <a href="mailto:MidnattLantern@proton.me" aria-label="developer's email address">MidnattLantern@proton.me</a></span>
        <span>GitHub: <a href="https://github.com/MidnattLantern" target="_blank">MidnattLantern</a></span>
      </footer>
    </>
  )
}

export default App
