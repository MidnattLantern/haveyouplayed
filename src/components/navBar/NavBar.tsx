import Styles from './NavBar.module.scss'

function NavBar() {

    return (
        <>
            <nav className={Styles.test__test}>
                <a href='#'><h1>Haveyouplayed</h1></a>
                <a href='#home-about'>Home & About</a>
                <a href='#library'>Library</a>
                <a href='#suggest'>Suggest</a>
            </nav>
        </>
    )
}

export default NavBar