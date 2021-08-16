import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps,router }) {
  return (<>
    <AnimatePresence exitBeforeEnter>
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  </>
  )
}

export default MyApp
