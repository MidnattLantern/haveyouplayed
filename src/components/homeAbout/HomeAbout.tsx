import './banner.scss' // non-modular SCSS are strictly exclusive for more complex SVG:s only
// import Styles from './HomeAbout.module.scss'
import Banner from '../../assets/haveyouplayed-banner.svg?react'

function HomeAbout() {

    return (
        <>
            <h2>Home & About</h2>
            <Banner/>
        </>
    )
}

export default HomeAbout