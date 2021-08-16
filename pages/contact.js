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
      transition={{ duration: 1 }}
    >
      <Head>
        <title>Contact | Aditya Mohan</title>
      </Head>
      <Navbar />
      <Container fluid className={Styles.contactContainer}>
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
      </Container>
    </motion.div>
  )
}

export default Contact
