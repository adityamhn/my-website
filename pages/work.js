import { Container, Row, Col } from "react-bootstrap"
import Styles from '../styles/pages/work.module.scss'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Image from 'next/image'
import Head from 'next/head'

const Work = () => {
  return (
    <div>
      <Head>
        <title>Work | Aditya Mohan</title>
      </Head>
      <Navbar />
      <Container fluid className={Styles.workContainer}>
        <div className={Styles.wrapper}>
          <h3 className={Styles.workHeading}>My works</h3>
          <div className={Styles.allWorks}>
            <Row className={Styles.projectBlock1}>
              <Col sm={8} className={Styles.block1}>
                <div className={Styles.project1}>
                  <Image src={"/images/rect.svg"} className={Styles.previewimg1} alt="Project-1" layout="fill" objectFit="cover" />
                </div>
              </Col>
              <Col sm={4} className={Styles.block2}>
                <div className={Styles.project2}>
                  <Image src={"/images/rect.svg"} className={Styles.previewimg2} alt="Project-2" layout="fill" objectFit="cover" />
                </div>
                <div className={Styles.project3}>
                  <Image src={"/images/rect.svg"} className={Styles.previewimg3} alt="Project-3" layout="fill" objectFit="cover" />
                </div>
              </Col>
            </Row>
            <Row className={Styles.projectBlock2}>
              <Col sm={4} className={Styles.block2}>
                <div className={Styles.project2}>
                  <Image src={"/images/rect.svg"} className={Styles.previewimg2} alt="Project-2" layout="fill" objectFit="cover" />
                </div>
                <div className={Styles.project3}>
                  <Image src={"/images/rect.svg"} className={Styles.previewimg3} alt="Project-3" layout="fill" objectFit="cover" />
                </div>
              </Col>
              <Col sm={8} className={Styles.block1}>
                <div className={Styles.project1}>
                  <Image src={"/images/rect.svg"} className={Styles.previewimg1} alt="Project-1" layout="fill" objectFit="cover" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Work
