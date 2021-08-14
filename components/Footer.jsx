import { Container } from "react-bootstrap"
import Styles from '../styles/components/Footer.module.scss'
import ActiveLink from './ActiveLink'


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
                        <a href="https://www.instagram.com/aditya_peela/" target="_blank" rel="noreferrer" className={Styles.socialLink}>Instagram</a>
                    </div>
                    <div className={Styles.linksSec}>
                        <ActiveLink href="/" activeClassName={Styles.activeFootLink}>
                        <a className={Styles.footLink}>Home</a>
                        </ActiveLink>
                        <ActiveLink href="/work" activeClassName={Styles.activeFootLink}>
                        <a className={Styles.footLink}>Work</a>
                        </ActiveLink>
                        <ActiveLink href="/about" activeClassName={Styles.activeFootLink}>
                        <a className={Styles.footLink}>About</a>
                        </ActiveLink>
                        <ActiveLink href="/contact" activeClassName={Styles.activeFootLink}>
                        <a className={Styles.footLink}>Contact</a>
                        </ActiveLink>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer
