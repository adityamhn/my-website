import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { useEffect } from 'react';
import { AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  NProgress.configure({ showSpinner: false });

  let copies = [];

  const onLoad = () => {
    const nodes = document.querySelectorAll(
      "link[rel=stylesheet], style:not([media=x])"
    );
    copies = [...nodes].map((el) => el.cloneNode(true));

    for (let copy of copies) {

      copy.removeAttribute("data-n-p");
      copy.removeAttribute("data-n-href");
      document.head.appendChild(copy);
    }
  };

  const onExit = () => {
    for (let copy of copies) {
      document.head.removeChild(copy);
    }
  };

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
    router.events.on("beforeHistoryChange", onLoad);


    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
      router.events.off("beforeHistoryChange", onLoad);

    }
  }, [router])

  return (<>
    <AnimatePresence exitBeforeEnter={true} onExitComplete={onExit}>
    <AnimatedCursor
      innerSize={8}
      outerSize={28}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2.5}
    />
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  </>
  )
}

export default MyApp
