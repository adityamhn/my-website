import { Container } from "react-bootstrap"
import Styles from '../styles/pages/contact.module.scss'
import Navbar from "../components/Navbar"
import Head from 'next/head'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact | Aditya Mohan</title>
        <meta property="og:image" content="%PUBLIC_URL%/screenshot.png" />
        <meta name="description" content=" I am a web developer and UI/UX designer working from Vizag, India. Currently the CTO of Bugbase and CTO of Kryptocards." />
      </Head>
      <Navbar />
      <Container fluid className={Styles.contactContainer}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={Styles.wrapper}>
            <h4 className={Styles.header}>Lets work together</h4>
            <div className={Styles.mailSec}>
              <div className={Styles.text}>send me a hello.</div>
              <a href="mailto:aditya530026@gmail.com" className={Styles.mail}>
                aditya530026@gmail.com
              </a>
            </div>
            <div className={Styles.socials}>
              <a href="https://www.linkedin.com/in/aditya-mohan-6a506b1b2/" target="_blank" rel="noreferrer" className={Styles.socialLink}>LinkedIn</a>
              <a href="https://www.instagram.com/aditya_peela/" target="_blank" rel="noreferrer" className={Styles.socialLink}>Instagram</a>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Contact
