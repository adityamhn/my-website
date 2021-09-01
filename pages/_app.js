import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageTransition } from 'next-page-transitions'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (<>
    <PageTransition timeout={400} classNames="page-transition">
      <Component key={router.route} {...pageProps} />
    </PageTransition>
  </>
  )
}

export default MyApp
