import { Container } from "react-bootstrap"
import Styles from '../styles/components/Footer.module.scss'
import Link from 'next/link'


const Footer = () => {
    return (
        <Container fluid className={Styles.footerContainer}>
            <div className={Styles.footerWrapper}>
                <div className={Styles.mailInfo}>
                    <div className={Styles.text}>
                        Send me a hello.
                    </div>
                    <a href="mailto:aditya530026@gmail.com" className={Styles.mail}>
                        aditya530026@gmail.com
                    </a>
                </div>
                <div className={Styles.otherLinks}>
                    <div className={Styles.socials}>
                        <a href="https://www.linkedin.com/in/aditya-mohan-6a506b1b2/" target="_blank" rel="noreferrer" className={Styles.socialLink}>LinkedIn</a>
                        <a href="https://dribbble.com/adityamhn" target="_blank" rel="noreferrer" className={Styles.socialLink}>Dribbble</a>
                        <a href="https://www.instagram.com/aditya_peela/" target="_blank" rel="noreferrer" className={Styles.socialLink}>Instagram</a>
                    </div>
                    <div className={Styles.linksSec}>
                        <Link href="/">
                        <a className={Styles.footLink}>Home</a>
                        </Link>
                        <Link href="/work">
                        <a className={Styles.footLink}>Work</a>
                        </Link>
                        <Link href="/about">
                        <a className={Styles.footLink}>About</a>
                        </Link>
                        <Link href="/contact">
                        <a className={Styles.footLink}>Contact</a>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer
