import { Container } from "react-bootstrap"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Styles from '../../styles/pages/bugbase.module.scss'
import Image from 'next/image'
import Head from 'next/head'
import { motion } from "framer-motion"

const Examtantra = () => {
    return (
        <div>
            <Head>
                <title>ExamTantra | Aditya Mohan</title>
                <meta property="og:image" content="%PUBLIC_URL%/screenshot.png" />
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
                            ExamTantra is a platform that Gamify the mundane tasks of attempting exams by bringing more productive practice environment to the students.
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
                                    Competitive exams are a cornerstone in almost every student’s life. However, the archaic education system makes the preparation process very tedious, boring and unintuitive. This leads to burnout and a general disinterest in academics. This system is also inefficient as it doesn’t have room for a dynamic method of preparation.
                                </p>
                                <p className="pt-4">
                                    ExamTantra’s “Gamifies” this mundane tasks of attempting exams by adding elements such as peer attempts: solving papers with peers resulting in a more productive practice environment, leaderboards to compare progress, a clean minimal UI not to distract the user, badges, awards and other reinforcements which have proven to be psychological motivators.
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
                                    ExamTantra was a project we made for a hackathon where we won the first runner-up. The entire team worked together for the first time, so we did not have a standard tech stack. We decided to try out something entirely new for all of us, ie. Ionic with React as the frontend. I was one most familiar with React at the time, so I mostly worked on building the frontend of the App. We decided to go with firebase cloud functions as the backend since we had a time restriction to submit the project.
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
                </motion.div>
            </Container>
            <Footer />
        </div>
    )
}

export default Examtantra
