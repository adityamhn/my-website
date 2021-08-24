import { Container } from "react-bootstrap"
import Image from 'next/image'
import Styles from '../styles/pages/error.module.scss'
import Head from "next/head"

const Error = () => {
    return (
        <div>
            <Head>
                <title>404 | Aditya Mohan</title>
            </Head>
            <Container fluid className={Styles.errorContainer}>
                <div className={Styles.wrapper}>
                    <Image src="/images/error.gif" width="45" height="30" layout="responsive" objectFit="contain" />
                    <div className={Styles.homeBtn}>Go to home</div>
                </div>
            </Container>
        </div>
    )
}

export default Error
