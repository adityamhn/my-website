import { Container } from "react-bootstrap"
import Styles from '../styles/pages/contact.module.scss'
import Navbar from "../components/Navbar"
import Head from 'next/head'

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact | Aditya Mohan</title>
      </Head>
      <Navbar />
      <Container fluid className={Styles.contactContainer}>
        <div className={Styles.wrapper}>
          <h4 className={Styles.header}>Lets work together</h4>
          <div className={Styles.mailSec}>
            <div className={Styles.text}>send me a hello.</div>
            <div className={Styles.mail}>aditya530026@gmail.com</div>
          </div>
          <div className={Styles.socials}>
            <div className={Styles.socialLink}>LinkedIn</div>
            <div className={Styles.socialLink}>Instagram</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact
