import { Container } from "react-bootstrap"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Styles from '../../styles/pages/bugbase.module.scss'
import ReactPlayer from 'react-player/youtube'
import Image from 'next/image'
import Head from 'next/head'
import { motion } from "framer-motion"

const Kryptocards = () => {


    return (
        <div>
            <Head>
                <title>Kryptocards | Aditya Mohan</title>
                <meta property="og:image" content="https://res.cloudinary.com/adityamhn/image/upload/v1629784188/Screenshot_2021-08-24_at_10.52.18_AM_tob60s.png" />
                <meta name="description" content=" I am a web developer and UI/UX designer working from Vizag, India. Currently the CTO of Bugbase and CTO of Kryptocards." />
            </Head>
            <Navbar />
            <Container fluid className={Styles.bugbaseContainer}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className={Styles.wrapper}>
                        <div className={Styles.introduction}>
                            Kryptocards is a ethereum based NFT platform that sells unique digital NFTs.
                        </div>
                        <div className={Styles.introPicSec}>
                            <Image src={'/images/kryptocards/main.svg'} className={Styles.introPic} width={"100%"} height={62} objectFit="cover" layout="responsive" />

                        </div>
                        <div className={Styles.startInformationSec}>
                            <div className={Styles.linkAndDate}>
                                <div className={Styles.linkSec}>
                                    <a href="https://kryptocards.tech" target="_blank" rel="noreferrer" className={Styles.link}>{"https://kryptocards.tech"}</a>
                                    <div className={Styles.webText}>website</div>
                                </div>
                                <div className={Styles.linkSec}>
                                    <div className={Styles.link}>May 2021 - current</div>
                                    <div className={Styles.webText}>Project Date</div>
                                </div>
                            </div>
                            <div className={Styles.startInfo}>
                                <p className="m-0">
                                    Krypto Cards puts on display collectable cards in the form of NFTs for you to buy. We are revolutionising the legacy of collecting physical cards into a digital one that will awaken the fan within you. Krypto Cards is one of the very first Ethereum based NFT platforms in India. Krypto Cards ties up with renowned artist and sell their NFTs on the ethereum blockchain.
                                </p>

                            </div>
                        </div>
                        <div className={Styles.image2Sec}>
                            <Image src={'/images/kryptocards/landing.svg'} className={Styles.image2} width={"100%"} height={62} objectFit="cover" layout="responsive" />
                        </div>
                        <div className={Styles.info2Sec}>
                            <div className={Styles.info2}>
                                <h5 className={Styles.info2Title}>My Role</h5>
                                <p className="m-0">
                                    I am the Chief technology officer ( CTO ) of KryptoCards, maintaining the website and other technical work of Kryptocards. My primary job was to research, wireframe, design and build the website. Kryptocards is built using Nodejs and React for backend and frontend, respectively. It also has its own smart contract.
                                </p>
                            </div>
                        </div>
                        <div className={Styles.info2Sec}>
                            <div className={Styles.info2}>
                                <h5 className={Styles.info2Title}>Research, Design and Insights</h5>
                                <p className="m-0">
                                    In the Research Phase, I went through all the website needs and defined a problem statement. Then, I started researching the target audience. Since most of our audience are NFT enthusiasts and art lovers, I decided to go with a clean, minimal and visually pleasing design. I tried different colour palettes with good colour contrasts.
                                </p>
                                <p className="mt-4">
                                    Then I focused on branding and logo design, tried different types of logos and finally decided upon one after having a good discussion with the team. Then I created my workspace and started working on the wireframes, developing visual mockups and building the website.
                                </p>
                            </div>
                        </div>
                        <div className={Styles.image2Sec}>
                            <Image src={'/images/kryptocards/logo.svg'} className={Styles.image2} width={"100%"} height={62} objectFit="cover" layout="responsive" />
                        </div>
                    </div>
                </motion.div>
            </Container>
            <Footer />
        </div>
    )
}

export default Kryptocards
