import { Container } from "react-bootstrap"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Styles from '../../styles/pages/bugbase.module.scss'
import ReactPlayer from 'react-player/youtube'
import Image from 'next/image'
import Head from 'next/head'

const Examtantra = () => {
    return (
        <div>
            <Head>
                <title>ExamTantra | Aditya Mohan</title>
            </Head>
            <Navbar />
            <Container fluid className={Styles.bugbaseContainer}>
                <div className={Styles.wrapper}>
                    <div className={Styles.introduction}>
                        ExamTantra is a platform that Gamify the mundane tasks of attempting exams.
                    </div>
                    <div className={Styles.introPicSec}>

                        <Image src={'/images/examtantra/logo.svg'} className={Styles.introPic} width={"100%"} height={62} objectFit="cover" layout="responsive" />

                    </div>
                    <div className={Styles.startInformationSec}>
                        <div className={Styles.linkAndDate}>
                            <div className={Styles.linkSec}>
                                <a href="https://devfolio.co/submissions/examtantra-27f5" target="_blank" rel="noreferrer" className={Styles.link}>{"https://devfolio.co/submissions/examtantra-27f5"}</a>
                                <div className={Styles.webText}>website</div>
                            </div>
                            <div className={Styles.linkSec}>
                                <div className={Styles.link}>March 2021</div>
                                <div className={Styles.webText}>Project Date</div>
                            </div>
                        </div>
                        <div className={Styles.startInfo}>
                            <p className="m-0">
                                Bugbase is a platform for companies to setup bug bounty programs. Bug bounty programs are a way to crowdsource identifying potential threats on websites, thus safeguarding the web for future users. We provide a clean and straightforward User Experience to engage more cybersecurity fanatics. Despite being a giant in the tech world, several Indian companies, private and government-run are still not secure and frequently experience security breaches. BugBase also provides organizations with the ability to host Capture The Flag (CTFs) events for cybersecurity novices to practice, learn and grow into professionals.
                            </p>

                        </div>
                    </div>
                    <div className={Styles.image2Sec}>
                        <Image src={'/images/examtantra/dashboard.svg'} className={Styles.image2} width={"100%"} height={62} objectFit="cover" layout="responsive" />
                    </div>
                    <div className={Styles.info2Sec}>
                        <div className={Styles.info2}>
                            <h5 className={Styles.info2Title}>My Role</h5>
                            <p className="m-0">
                                Bugbase is a platform for companies to setup bug bounty programs. Bug bounty programs are a way to crowdsource identifying potential threats on websites, thus safeguarding the web for future users. We provide a clean and straightforward User Experience to engage more cybersecurity fanatics. Despite being a giant in the tech world, several Indian companies, private and government-run are still not secure and frequently experience security breaches. BugBase also provides organizations with the ability to host Capture The Flag (CTFs) events for cybersecurity novices to practice, learn and grow into professionals.
                            </p>
                        </div>
                    </div>
                    <div className={Styles.image2Sec}>
                        <Image src={'/images/examtantra/leaderboard.svg'} className={Styles.image2} width={"100%"} height={62} objectFit="cover" layout="responsive" />
                    </div>
                    <div className={Styles.image2Sec}>
                        <Image src={'/images/examtantra/search.svg'} className={Styles.image2} width={"100%"} height={62} objectFit="cover" layout="responsive" />
                    </div>
                    <div className={Styles.image2Sec}>
                        <Image src={'/images/examtantra/splash.svg'} className={Styles.image2} width={"100%"} height={90} objectFit="cover" layout="responsive" />
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Examtantra
