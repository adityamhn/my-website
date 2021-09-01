import { Container } from "react-bootstrap"
import Styles from '../styles/pages/contact.module.scss'
import Navbar from "../components/Navbar"
import Head from 'next/head'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <Head>
        <title>Contact | Aditya Mohan</title>
        <meta property="og:image" content="https://res.cloudinary.com/adityamhn/image/upload/v1629784188/Screenshot_2021-08-24_at_10.52.18_AM_tob60s.png" />
        <meta name="description" content=" I am a web developer and UI/UX designer working from Vizag, India. Currently the CTO of Bugbase and CTO of Kryptocards." />
      </Head>
      <Navbar />
      <Container fluid className={Styles.contactContainer}>
        <div>
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
              <a href="https://dribbble.com/adityamhn" target="_blank" rel="noreferrer" className={Styles.socialLink}>Dribbble</a>
              <a href="https://www.instagram.com/aditya_peela/" target="_blank" rel="noreferrer" className={Styles.socialLink}>Instagram</a>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}

export default Contact
