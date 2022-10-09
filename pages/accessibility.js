import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from "../styles/Accessibility.module.css"

export default function Accessibility() {
	return (
		<>
		<div className={styles.mainContainer}>
		  <Navbar isDarkTheme={true}/>
		  <h1 className={styles.contactComponentTitle}></h1>
			<div className={styles.contentRoot}>
				<div className={styles.contentCentered}>
					<p>Our mission has always been to make travel more meaningful and accessible. As such, we strive to make it as easy as possible for those with vision, hearing, or other disabilities to learn about our property, reserve their stay with us and enjoy all that our property has to offer.</p>
					<p>If you have questions or would like to report an issue relating to the accessibility of this website, or if you have difficulty using our website because of a covered disability, please contact us at the telephone number(s) and/or email address listed below.</p>
					<ul>
						<li><a href="tel:+919459201765">+919459201765</a></li>
						<li><a href="mailto:nirbhayrana8@gmail.com">nirbhayrana8@gmail.com</a></li>
					</ul>
				</div>
			</div>
			<div className={styles.footerContainer}>
			  <Footer />
			</div>
		</div>
	  </>
	  )
}