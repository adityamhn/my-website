import { Container } from "react-bootstrap"
import Image from 'next/image'
import Styles from '../styles/pages/error.module.scss'
import Head from "next/head"
import Link from "next/link"

const Error = () => {
    return (
        <div>
            <Head>
                <title>404 | Aditya Mohan</title>
                <meta property="og:image" content="https://res.cloudinary.com/adityamhn/image/upload/v1629784188/Screenshot_2021-08-24_at_10.52.18_AM_tob60s.png" />
                <meta name="description" content=" I am a web developer and UI/UX designer working from Vizag, India. Currently the CTO of Bugbase and CTO of Kryptocards." />
            </Head>
            <Container fluid className={Styles.errorContainer}>
                <div className={Styles.wrapper}>
                    <Image src="/images/error.gif" width="45" height="30" layout="responsive" objectFit="contain" />
                    <Link href="/">
                        <div className={Styles.homeBtn}>Go to home</div>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Error
