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
      </div>
      <div className={styles.content}>
        <p>By now we sure have you interested in booking the best stay available at Thatharna. You can call us at <ins>9459201765</ins> or email us <a href="mailto:nirbhayrana8@gmail.com">here</a></p>
      </div>
      <Footer></Footer>
    </div>
  </>
  )
}


Contact.getLayout = (page) => {
  return page;
}
