import { Container } from "react-bootstrap"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Styles from '../../styles/pages/bugbase.module.scss'
import ReactPlayer from 'react-player/youtube'
import Image from 'next/image'
import Head from 'next/head'

const Bugbase = () => {
    return (
        <div>
            <Head>
                <title>Bugbase | Aditya Mohan</title>
                <meta property="og:image" content="https://res.cloudinary.com/adityamhn/image/upload/v1629784188/Screenshot_2021-08-24_at_10.52.18_AM_tob60s.png" />
                <meta name="description" content=" I am a web developer and UI/UX designer working from Vizag, India. Currently the CTO of Bugbase and CTO of Kryptocards." />
            </Head>
            <Navbar />
            <Container fluid className={Styles.bugbaseContainer}>
                <div>
                    <div className={Styles.wrapper}>
                        <div className={Styles.introduction}>
                            Bugbase is india’s first consolidated bugbounty platform where companies can setup their bugbounty program that can be reached out by ethical hackers and security enthusiasts all over the country.
                        </div>
                        <div className={Styles.introPicSec}>
                            <div className={Styles.playerWrapper}>
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=4kWZn4xY2hI"
                                    className={Styles.introVid}
                                    width={"100%"} height={"100%"}
                                    playing={true} muted={true}
                                    controls={true}
                                />
                            </div>
                        </div>
                        <div className={Styles.startInformationSec}>
                            <div className={Styles.linkAndDate}>
                                <div className={Styles.linkSec}>
                                    <a href="https://bugbase.in" target="_blank" rel="noreferrer" className={Styles.link}>{"https://bugbase.in"}</a>
                                    <div className={Styles.webText}>website</div>
                                </div>
                                <div className={Styles.linkSec}>
                                    <div className={Styles.link}>March 2021 - current</div>
                                    <div className={Styles.webText}>Project Date</div>
                                </div>
                            </div>
                            <div className={Styles.startInfo}>
                                <p className="m-0">
                                    Bugbase is a platform for companies to set up bug bounty programs. Bug bounty programs are a way to crowdsource identifying potential threats on websites, thus safeguarding the web for future users. We provide a clean and straightforward User Experience to engage more cybersecurity fanatics. Despite being a giant in the tech world, several Indian companies, private and government-run, are still not secure and frequently experience security breaches. BugBase also provides organizations with the ability to host Capture The Flag (CTFs) events for cybersecurity novices to practice, learn and grow into professionals.
                                </p>

                            </div>
                        </div>
                        <div className={Styles.image2Sec}>
                            <Image src={'/images/bugbase/website.svg'} className={Styles.image2} width={"100%"} height={62} objectFit="cover" layout="responsive" />
                        </div>
                        <div className={Styles.info2Sec}>
                            <div className={Styles.info2}>
                                <h5 className={Styles.info2Title}>My Role</h5>
                                <p className="m-0">
                                    I am the CTO ( Chief technology officer) of BugBase, and I am responsible for the technical development of BugBase. I majorly worked on developing the front end of the website and introducing the best practices to BugBase. BugBase was entirely built using Nodejs and express for backend and Reactjs for frontend. The frontend interacts with the backend using Axios via a REST API. The user sessions are stored in Redis and images on AWS S3 buckets. We are using MongoDB as our database.
                                </p>
                            </div>
                        </div>
                        <div className={Styles.image2Sec}>
                            <Image src={'/images/bugbase/main.svg'} className={Styles.image2} width={"100%"} height={62} objectFit="cover" layout="responsive" />
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Bugbase
