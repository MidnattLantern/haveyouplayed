import Styles from './NavBar.module.scss'
import Logo from "../../assets/haveyouplayed-logo.svg?react"
import RoundArrow from "../../assets/vectorIcons/round-arrow.svg?react"
import { useState } from 'react'

function NavBar() {
    const [showNavBar, setShowNavBar] = useState<boolean>(false)

    function handleToggleShowNavBar() {
        setShowNavBar(!showNavBar)
    }

    function handleHideNavBar() {
        setShowNavBar(false)
        document.getElementById("navBarTabDestination")?.focus() // Specify element to focus for better UX for a11y
    }

    return (
        <>
            <header className={`${Styles.container} ${showNavBar ? undefined : Styles.containerNoEvents}`} onClick={showNavBar ? handleHideNavBar : undefined}>
                <button onClick={handleToggleShowNavBar} className={`${Styles.toggleNavBarButton} ${showNavBar ? Styles.expandedNavBarButton : ""}`}>
                    <h1>
                        <Logo aria-label="Have you played logo"/>
                        <span className={Styles.logoA11y}>Have you played</span>
                    </h1>
                    <RoundArrow className={`${Styles.roundArrow} ${showNavBar ? Styles.roundArrowLeft : ""}`}/>
                </button>
                <nav className={showNavBar ? Styles.navIsVisible : Styles.navIsHidden}>
                    <a href='#home-about'>Home & About</a>
                    <a href='#library'>Library</a>
                    <a href='#suggest'>Suggest</a>
                </nav>
            </header>
        </>
    )
}

export default NavBar