import { Container } from "react-bootstrap"
import Styles from '../styles/pages/about.module.scss'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Head from 'next/head'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div>
      <Head>
        <title>About | Aditya Mohan</title>
      </Head>
      <Navbar />
      <Container fluid className={Styles.aboutContainer}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={Styles.aboutWrapper}>
            <p className={Styles.about1}>
              My name is Aditya Mohan. Iam a Full Stack Web developer & UI/UX designer based in Vizag, India. Im currently pursuing my under graduate degree from Manipal institute of technology, Manipal. I love to build and break things and Im currently trying to make internet a beautiful place.
            </p>
            <div className={Styles.about2}>
              <p className={Styles.text2}>
                I started out web development in 2019 as fun but really loved it. Since then, i started building websites and also learned web design.
              </p>
              <p className={Styles.text2}>
                Through the years of learning web development and design i found that visually clean and minimal websites tend to gain more trust from users than a complex website with no interactivity.
              </p>
              <p className={Styles.text2}>
                Adding interactive functionality to the websites with a minimal and clean design is my key to building websites with great user experience.
              </p>
            </div>
            <div className={Styles.techSkills}>
              <h5 className={Styles.skillsHeading}>
                Tools & Tech that I use
              </h5>
              <div className={Styles.skills}>
                <div className={Styles.skillBlock}>
                  <div className={Styles.skill}>Reactjs</div>
                  <div className={Styles.skill}>Express</div>
                </div>
                <div className={Styles.skillBlock}>
                  <div className={Styles.skill}>HTML</div>
                  <div className={Styles.skill}>Figma</div>
                </div>
                <div className={Styles.skillBlock}>
                  <div className={Styles.skill}>CSS/SCSS</div>
                  <div className={Styles.skill}>Adobe XD</div>
                </div>
                <div className={Styles.skillBlock}>
                  <div className={Styles.skill}>Javascript</div>
                  <div className={Styles.skill}>Illustrator</div>
                </div>
                <div className={Styles.skillBlock}>
                  <div className={Styles.skill}>Nextjs</div>
                  <div className={Styles.skill}>Flutter</div>
                </div>
                <div className={Styles.skillBlock}>
                  <div className={Styles.skill}>Nodejs</div>
                  <div className={Styles.skill}>Python</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
      <Footer />
    </div>
  )
}

export default About
