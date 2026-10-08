import Styles from './NavBar.module.scss'
import Logo from "../../assets/haveyouplayed-logo.svg?react"

function NavBar() {

    return (
        <>
            <nav className={Styles.test__test}>
                <h1>
                    <a href='#'>
                        <Logo aria-label="Have you played logo"/>
                        <span className={Styles.logoA11y}>Have you played</span>
                    </a>
                </h1>
                <a href='#home-about'>Home & About</a>
                <a href='#library'>Library</a>
                <a href='#suggest'>Suggest</a>
            </nav>
        </>
    )
}

export default NavBar