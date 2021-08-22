import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Styles from '../styles/components/Navbar.module.scss'
import ActiveLink from './ActiveLink'
import { RiMenu4Fill } from 'react-icons/ri'
import { IoCloseOutline } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [screen, setScreen] = useState(false)


  const openSidebar = () => {
    setToggle(true)
  }

  const closeSidebar = () => {
    setToggle(false)
  }


  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }

    changeBackground()
    window.addEventListener('scroll', changeBackground)
  })


  useEffect(() => {
    const changeWidth = () => {
      if (window.innerWidth <= 786) {
        setScreen(true)
      } else {
        setScreen(false)
      }
    }

    changeWidth()
    window.addEventListener('resize', changeWidth)
  })


  return (
    <>
      <Container fluid style={{
        top: navbar ? "-64px" : "0"
      }} className={Styles.navbarContainer}>
        <div className={Styles.wrapper}>
          <nav className={Styles.mainNav}>
            <ActiveLink activeClassName={Styles.activeLink} href="/"><a className={Styles.navLink}>Home</a></ActiveLink>
            <ActiveLink activeClassName={Styles.activeLink} href="/work"><a className={Styles.navLink}>Work</a></ActiveLink>
            <ActiveLink activeClassName={Styles.activeLink} href="/about"><a className={Styles.navLink}>About</a></ActiveLink>
            <ActiveLink activeClassName={Styles.activeLink} href="/contact"><a className={Styles.navLink}>Contact</a></ActiveLink>
          </nav>
          <div className={Styles.hamSec}>
            <RiMenu4Fill onClick={openSidebar} className={Styles.ham} />
          </div>
        </div>
      </Container>
      <AnimatePresence>
        {toggle && (
          <motion.div 
          initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: toggle && screen ? 'block' : 'none',
            }} className={Styles.sidebarContainer}>
            <div className={Styles.closeSec}>
              <IoCloseOutline onClick={closeSidebar} className={Styles.close} />
            </div>
            <div className={Styles.sidebarWrapper}>
              <nav className={Styles.mainNav}>
                <ActiveLink activeClassName={Styles.activeLink} href="/"><a className={Styles.navLink}>Home</a></ActiveLink>
                <ActiveLink activeClassName={Styles.activeLink} href="/work"><a className={Styles.navLink}>Work</a></ActiveLink>
                <ActiveLink activeClassName={Styles.activeLink} href="/about"><a className={Styles.navLink}>About</a></ActiveLink>
                <ActiveLink activeClassName={Styles.activeLink} href="/contact"><a className={Styles.navLink}>Contact</a></ActiveLink>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
