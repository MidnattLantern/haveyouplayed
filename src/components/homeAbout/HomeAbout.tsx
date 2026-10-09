import './banner.scss' // non-modular SCSS are strictly exclusive for more complex SVG:s only
import Styles from './HomeAbout.module.scss'
import Banner from '../../assets/haveyouplayed-banner.svg?react'

function HomeAbout() {

    return (
        <>
            <h2>Home & About</h2>
            <Banner/>
            <p className={Styles.aboutParagraph}>{`Haveyouplayed list high quality console games to help gamers conveniently find their next world to escape into. Featuring both niché and popular titles across a wide variety of genre's, there's something out there for everyone. Haveyouplayed prioritize pure fun and innovation, each title featured can guarantee fun with confidence.`}</p>
        </>
    )
}

export default HomeAbout