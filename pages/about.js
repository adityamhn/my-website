import { Container } from "react-bootstrap"
import Styles from '../styles/pages/about.module.scss'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Head from 'next/head'

const About = () => {
  return (
    <div>
      <Head>
        <title>About | Aditya Mohan</title>
      </Head>
      <Navbar />
      <Container fluid className={Styles.aboutContainer}>
        <div className={Styles.aboutWrapper}>
          <p className={Styles.about1}>
            My name is Aditya Mohan. Iam a Full Stack Web developer & UI/UX designer based in Vizag, India. Im currently pursuing my under graduate degree from Manipal institute of technology, Manipal. I love to build and break things and Im currently trying to make internet a beautiful place.
          </p>
          <div className={Styles.about2}>
            <p className={Styles.text2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac placerat lacus. Nunc vitae tempor ligula. Sed volutpat tempus placerat.
            </p>
            <p className={Styles.text2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac placerat lacus. Nunc vitae tempor ligula. Sed volutpat tempus placerat.
            </p>
            <p className={Styles.text2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac placerat lacus. Nunc vitae tempor ligula. Sed volutpat tempus placerat.
            </p>
          </div>
          <div className={Styles.techSkills}>
            <h5 className={Styles.skillsHeading}>
              Tools and Tech that I use
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
      </Container>
      <Footer />
    </div>
  )
}

export default About
