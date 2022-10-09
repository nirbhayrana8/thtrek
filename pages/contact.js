import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import styles from "../styles/Contact.module.css"


export default function Contact() {
  return (
	<>
    <div className={styles.mainContainer}>
      <Navbar isDarkTheme={true}/>
      <h1 className={styles.contactComponentTitle}></h1>
      <div className={styles.contactHeader}>
        <h2>Contact us today!</h2>
        <p>Let&apos;s make Thatharna your next getaway by contacting us and ironing out the details.</p>
      </div>
        <div className={styles.content}>
          <div className={styles.tile}>
            <i class="fa-solid fa-envelope"></i>
            <p>Email us at <a href="mailto:nirbhayrana8@gmail.com">nirbhayrana8@gmail.com</a></p>
          </div>
          <div className={styles.tile}>
            <i class="fa-solid fa-phone"></i>
            <p>Call us at <a href="tel:+919459201765">9459201765</a></p>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
    </div>
  </>
  )
}