import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Styles from '../styles/components/Navbar.module.scss'
import ActiveLink from './ActiveLink'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)

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

  return (
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
      </div>
    </Container>
  )
}

export default Navbar
