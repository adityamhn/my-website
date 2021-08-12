import { Container } from "react-bootstrap"
import Styles from '../styles/components/Footer.module.scss'

const Footer = () => {
    return (
        <Container fluid className={Styles.footerContainer}>
            <div className={Styles.footerWrapper}>
                <div className={Styles.mailInfo}>
                    <div className={Styles.text}>
                        Send me a hello.
                    </div>
                    <div className={Styles.mail}>
                        aditya530026@gmail.com
                    </div>
                </div>
                <div className={Styles.otherLinks}>
                    <div className={Styles.socials}>
                        <div className={Styles.socialLink}>LinkedIn</div>
                        <div className={Styles.socialLink}>Instagram</div>
                    </div>
                    <div className={Styles.linksSec}>
                        <div className={Styles.footLink}>Home</div>
                        <div className={Styles.footLink}>Work</div>
                        <div className={Styles.footLink}>About</div>
                        <div className={Styles.footLink}>Contact</div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer
