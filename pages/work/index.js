import { Container, Row, Col } from "react-bootstrap";
import Styles from "../../styles/pages/work.module.scss";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Work = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Work | Aditya Mohan</title>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/adityamhn/image/upload/v1629784188/Screenshot_2021-08-24_at_10.52.18_AM_tob60s.png"
        />
        <meta
          name="description"
          content=" I am a web developer and UI/UX designer working from Vizag, India. Currently the CTO of Bugbase and CTO of Kryptocards."
        />
      </Head>
      <Navbar />
      <Container fluid className={Styles.workContainer}>
        <div>
          <div className={Styles.wrapper}>
            <h3 className={Styles.workHeading}>My works</h3>
            <div className={Styles.allWorks}>
              <Row className={Styles.project}>
                <Col sm={12} className={Styles.block1}>
                  <div
                    onClick={() => router.push("/work/bugbase")}
                    className={Styles.project1}
                  >
                    <Image
                      src={"/images/bugbase/main.svg"}
                      className={Styles.previewimg4}
                      alt="Project-1"
                      width={"100%"}
                      height={57}
                      layout="responsive"
                      objectFit="cover"
                    />
                    <a>
                      <div className={Styles.projectDetails}>
                        <div className={Styles.proName}>Bugbase</div>
                        <div className={Styles.typeOfWork}>Web development</div>
                      </div>
                    </a>
                  </div>
                </Col>
              </Row>
              <Row className={Styles.project}>
                <Col sm={8} className={Styles.block1}>
                  <div
                    onClick={() => router.push("/work/kryptocards")}
                    className={Styles.project1}
                  >
                    <Image
                      src={"/images/kryptocards/main.svg"}
                      className={Styles.previewimg1}
                      alt="Project-1"
                      width={"100%"}
                      height={75}
                      layout="responsive"
                      objectFit="cover"
                    />
                    <a>
                      <div className={Styles.projectDetails}>
                        <div className={Styles.proName}>Kryptocards</div>
                        <div className={Styles.typeOfWork}>Web development</div>
                      </div>
                    </a>
                  </div>
                </Col>
                <Col sm={4} className={Styles.block2}>
                  <div
                    onClick={() => router.push("/work/mrex")}
                    className={Styles.project2}
                  >
                    <Image
                      src={"/images/mrex/main.svg"}
                      className={Styles.previewimg2}
                      alt="Project-2"
                      width={"100%"}
                      height={75}
                      layout="responsive"
                      objectFit="cover"
                    />
                    <a>
                      <div className={Styles.projectDetails}>
                        <div className={Styles.proName}>Mrex</div>
                        <div className={Styles.typeOfWork}>App dev and UI/UX</div>
                      </div>
                    </a>
                  </div>
                  <div
                    onClick={() => router.push("/work/examtantra")}
                    className={Styles.project3}
                  >
                    <Image
                      src={"/images/examtantra/logo.svg"}
                      className={Styles.previewimg3}
                      alt="Project-3"
                      width={"100%"}
                      height={75}
                      layout="responsive"
                      objectFit="cover"
                    />
                    <a>
                      <div className={Styles.projectDetails}>
                        <div className={Styles.proName}>Exam tantra</div>
                        <div className={Styles.typeOfWork}>App development</div>
                      </div>
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </motion.div>
  );
};

export default Work;
