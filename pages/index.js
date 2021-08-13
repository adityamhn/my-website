import { Col, Container, Row } from "react-bootstrap"
import Navbar from "../components/Navbar"
import Styles from '../styles/pages/home.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Footer from "../components/Footer"
import { useEffect, useRef } from "react"



const Home = () => {


  return (
    <div>
      <Head>
        <title>Aditya Mohan</title>
      </Head>
      <Navbar />
      <Container fluid className={Styles.homeContainer} >
        <div className={Styles.homeWrapper}>

          {/* Hero section */}


          <div className={Styles.heroSec}>
            <h1 className={Styles.myName}>Aditya Mohan.</h1>
            <h2 className={Styles.desig}>Web developer &</h2>
            <h2 className={Styles.desig}>UI/UX designer</h2>
          </div>


          {/* Featured Work section */}


          <div className={Styles.featureSec}>
            <h3 className={Styles.featureHead}>Featured Work</h3>
            <div className={Styles.allWorks}>
              <Row className={Styles.project}>
                <Col sm={8} className={Styles.block1}>
                  <div className={Styles.project1}>
                    <Image src={"/images/bugbase/main.svg"} className={Styles.previewimg1} alt="Project-1" width={"100%"} height={75} layout="responsive" objectFit="cover" />
                    <div className={Styles.projectDetails} >
                      <div className={Styles.proName}>Bugbase</div>
                      <div className={Styles.typeOfWork}>Web development</div>
                    </div>
                  </div>
                </Col>
                <Col sm={4} className={Styles.block2}>
                  <div className={Styles.project2}>
                    <Image src={"/images/kryptocards/main.svg"} className={Styles.previewimg2} alt="Project-2" width={"100%"} height={75} layout="responsive" objectFit="cover" />
                    <div className={Styles.projectDetails} >
                      <div className={Styles.proName}>Kryptocards</div>
                      <div className={Styles.typeOfWork}>Web development</div>
                    </div>
                  </div>
                  <div className={Styles.project3}>
                    <Image src={"/images/examtantra/main.jpg"} className={Styles.previewimg3} alt="Project-3" width={"100%"} height={75} layout="responsive" objectFit="cover" />
                    <div className={Styles.projectDetails} >
                      <div className={Styles.proName}>Exam tantra</div>
                      <div className={Styles.typeOfWork}>App development</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>



          {/* Info about me sec */}



          <Row className={Styles.infoSec}>
            <Col xs={9} className={Styles.info1}>
              <h5 className={Styles.heading}>Ideate <svg className={Styles.triangle} width="30" height="30" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.9322 19.2353L13 3.52941L22.0678 19.2353H3.9322Z" stroke="#F3F3F3" stroke-width="3.52941" />
              </svg>
                Design <svg width="24" height="24" className={Styles.rectangle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2.03899" y="1.71429" width="19.9481" height="19.9481" stroke="#F3F3F3" stroke-width="4" />
                </svg>
                Develop</h5>
              <div className={Styles.infoText}>
                <div className={Styles.text}>
                I am a web developer and UI/UX designer working from Visakhapatnam, India. I am also the CTO of Bugbase.
                </div>
                <div className={Styles.text}>
                I love to create great experiences for the user making sure they have seamless interactivity with the digital world.
                </div>
                <div className={Styles.text}>
                I am currently a college student open to freelance work. Feel free to contact me. 😌
                </div>
              </div>
            </Col>
            <Col xs={3} className={Styles.info2}>
              I love to create something simple and clean
            </Col>
            <div className={Styles.aboutBtn}>About me <AiOutlineArrowRight className={Styles.icon} /></div>
          </Row>


        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Home


