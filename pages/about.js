import { Container, OverlayTrigger } from "react-bootstrap"
import Styles from '../styles/pages/about.module.scss'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Head from 'next/head'
import Image from "next/image"

const About = () => {
  return (
    <div>
      <Head>
        <title>About | Aditya Mohan</title>
        <meta property="og:image" content="https://res.cloudinary.com/adityamhn/image/upload/v1629784188/Screenshot_2021-08-24_at_10.52.18_AM_tob60s.png" />
        <meta name="description" content=" I am a web developer and UI/UX designer working from Vizag, India. Currently the CTO of Bugbase and CTO of Kryptocards." />
      </Head>
      <Navbar />
      <Container fluid className={Styles.aboutContainer}>
        <div>
          <div className={Styles.aboutWrapper}>
            <p className={Styles.about1}>
              My name is Aditya Mohan. I am a Full Stack Web developer & UI/UX designer based in Vizag, India. {"I'm"} currently pursuing my undergraduate degree from Manipal institute of technology, Manipal. I love to make artistic designs and try out new tech.
            </p>
            <div className={Styles.about2}>
              <p className={Styles.text2}>
                I started learning web development in 2019 as fun and loved it. Since then, I started building websites and also learned web design along the way.
              </p>
              <p className={Styles.text2}>
                Through the years of learning web development and design, I found that visually clean and minimal websites tend to gain more trust from users than a complex website with no interactivity.
              </p>
              <p className={Styles.text2}>
                Adding interactive functionality to the websites with a minimal and clean design is my key to building websites with a great user experience.
              </p>
            </div>
            <div className={Styles.techSkills}>
              <h5 className={Styles.skillsHeading}>
                Tools & Tech that I use
              </h5>
              <div className={Styles.skills}>
                <div className={Styles.skillBlock}>
                  <OverlayTrigger trigger="hover" placement="top" overlay={
                    <div>
                      <Image src={"/images/tech/react.svg"} width={"60px"} height={"60px"} />
                    </div>
                  }>
                    <div className={Styles.skill}>Reactjs</div>
                  </OverlayTrigger>
                  <OverlayTrigger trigger="hover" placement="top" overlay={
                    <div>
                      <Image src={"/images/tech/express.svg"} width={"60px"} height={"60px"} />
                    </div>
                  }>
                    <div className={Styles.skill}>Express</div>
                  </OverlayTrigger>
                </div>
                <div className={Styles.skillBlock}>
                  <OverlayTrigger trigger="hover" placement="top" overlay={
                    <div>
                      <Image src={"/images/tech/html.svg"} width={"60px"} height={"60px"} />
                    </div>
                  }>
                    <div className={Styles.skill}>HTML</div>
                  </OverlayTrigger>
                  <OverlayTrigger trigger="hover" placement="top" overlay={
                    <div>
                      <Image src={"/images/tech/figma.svg"} width={"60px"} height={"60px"} />
                    </div>
                  }>
                    <div className={Styles.skill}>Figma</div>
                  </OverlayTrigger>
                </div>
                <div className={Styles.skillBlock}>
                  <OverlayTrigger trigger="hover" placement="top" overlay={
                    <div>
                      <Image src={"/images/tech/css.svg"} width={"60px"} height={"60px"} />
                    </div>
                  }>
                    <div className={Styles.skill}>CSS/SCSS</div>
                  </OverlayTrigger>
                  <OverlayTrigger trigger="hover" placement="top" overlay={
                    <div>
                      <Image src={"/images/tech/xd.svg"} width={"60px"} height={"60px"} />
                    </div>
                  }>
                    <div className={Styles.skill}>Adobe XD</div>
                  </OverlayTrigger>
                </div>
                <div className={Styles.skillBlock}>
                  <OverlayTrigger trigger="hover" placement="top" overlay={
                    <div>
                      <Image src={"/images/tech/js.svg"} width={"60px"} height={"60px"} />
                    </div>
                  }>
                    <div className={Styles.skill}>Javascript</div>
                  </OverlayTrigger>
                  <OverlayTrigger trigger="hover" placement="top" overlay={
                    <div>
                      <Image src={"/images/tech/illustrator.svg"} width={"60px"} height={"60px"} />
                    </div>
                  }>
                    <div className={Styles.skill}>Illustrator</div>
                  </OverlayTrigger>
                </div>
                <div className={Styles.skillBlock}>
                  <OverlayTrigger trigger="hover" placement="top" overlay={
                    <div>
                      <Image src={"/images/tech/next.svg"} width={"80px"} height={"80px"} />
                    </div>
                  }>
                    <div className={Styles.skill}>Nextjs</div>
                  </OverlayTrigger>
                  <OverlayTrigger trigger="hover" placement="top" overlay={
                    <div>
                      <Image src={"/images/tech/flutter.svg"} width={"60px"} height={"60px"} />
                    </div>
                  }>
                    <div className={Styles.skill}>Flutter</div>
                  </OverlayTrigger>
                </div>
                <div className={Styles.skillBlock}>
                  <OverlayTrigger trigger="hover" placement="top" overlay={
                    <div>
                      <Image src={"/images/tech/node.svg"} width={"80px"} height={"80px"} />
                    </div>
                  }>
                    <div className={Styles.skill}>Nodejs</div>
                  </OverlayTrigger>
                  <OverlayTrigger trigger="hover" placement="top" overlay={
                    <div>
                      <Image src={"/images/tech/python.svg"} width={"60px"} height={"60px"} />
                    </div>
                  }>
                    <div className={Styles.skill}>Python</div>
                  </OverlayTrigger>
                </div>
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
