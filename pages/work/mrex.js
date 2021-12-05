import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Styles from "../../styles/pages/bugbase.module.scss";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

const Mrex = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>MREX | Aditya Mohan</title>
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
      <Container fluid className={Styles.bugbaseContainer}>
        <div>
          <div className={Styles.wrapper}>
            <div className={Styles.introduction}>
              MREX is a decentralized platform to store your medical records,
              it’s built with security in mind - the data is encrypted with a
              symmetric encryption scheme around the user’s password and
              uploaded on IPFS.
            </div>
            <div className={Styles.introPicSec}>
              <Image
                src={"/images/mrex/main.svg"}
                className={Styles.introPic}
                width={"100%"}
                height={62}
                objectFit="cover"
                layout="responsive"
              />
            </div>
            <div className={Styles.startInformationSec}>
              <div className={Styles.linkAndDate}>
                <div className={Styles.linkSec}>
                  <a
                    href="https://devfolio.co/submissions/mrex-07e7"
                    target="_blank"
                    rel="noreferrer"
                    className={Styles.link}
                  >
                    {"https://devfolio.co/submissions/mrex-07e7"}
                  </a>
                  <div className={Styles.webText}>website</div>
                </div>
                <div className={Styles.linkSec}>
                  <div className={Styles.link}>November 2021</div>
                  <div className={Styles.webText}>Project Date</div>
                </div>
              </div>
              <div className={Styles.startInfo}>
                <p className="m-0">
                Understandably so, any user would be skeptical of trusting an unknown organization with their medical records. Medical records hold highly sensitive information about the health of a person. In the wrong hands, the situation can be lead to making the user subject to exploitation. MRex addresses that by creating a highly secure and decentralized system to store medical reports that can only be accessed by the intended users.
                </p>
              </div>
            </div>
            <div className={Styles.image2Sec}>
              <Image
                src={"/images/mrex/reportPage.svg"}
                className={Styles.image2}
                width={"100%"}
                height={62}
                objectFit="cover"
                layout="responsive"
              />
            </div>
            <div className={Styles.info2Sec}>
              <div className={Styles.info2}>
                <h5 className={Styles.info2Title}>My Role</h5>
                <p className="m-0">
                  Mrex was a project we made at a hackathon (Reva Hack 2021). Our team won the first position. Since, it was a 3 day hackathon we decided to go with a tech stack that our whole team is familiar with. So decided with React Native for the frontend and Nodejs for backend. I was mainly responsible for designing the UI/UX and building the frontend of the App using React Native. We used IPSF to store the medical records, since IPFS is s decentralized storage system that no one {"\"owns\""}, this ensures the integrity of the information as it lies on a public network accountable by the world. Before the data is uploaded onto IPFS, we encrypt it with an AES cipher, keeping that key as a modified version of the user’s password hash(bcrypt hash last 16 characters x 2). This ensures that no one else can read the medical information other than the user.

                </p>
              </div>
            </div>

            <div className={Styles.image2Sec}>
              <Image
                src={"/images/mrex/profile.svg"}
                className={Styles.image2}
                width={"100%"}
                height={62}
                objectFit="cover"
                layout="responsive"
              />
            </div>
            <div className={Styles.image2Sec}>
              <Image
                src={"/images/mrex/introPage.svg"}
                className={Styles.image2}
                width={"100%"}
                height={90}
                objectFit="cover"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </motion.div>
  );
};

export default Mrex;
