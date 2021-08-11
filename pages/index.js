import { Col, Container, Row } from "react-bootstrap"
import Navbar from "../components/Navbar"
import Styles from '../styles/pages/home.module.scss'
import Head from 'next/head'
import Image from 'next/image'


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
            </div>
          </div>



          {/* Info about me sec */}



          <div className={Styles.infoSec}>

          </div>

        </div>
      </Container>
    </div>
  )
}

export default Home
