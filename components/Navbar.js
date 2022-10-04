import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import styles from "../styles/Navbar.module.css"

export default function Navbar() {

	const [menuOpen, setMenuOpen] = useState(false);
	const [showNavbar, setShowNavbar] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [])

	const handleClick = () => {
		setMenuOpen(!menuOpen);
	}

	const handleScroll = () => {
		if (window.scrollY >= 80) {
			setShowNavbar(true);
			return;
		}
		setShowNavbar(false);
	}

	return (
		<>
			<nav className={showNavbar ? `${styles.navbar} ${styles.active}` : styles.navbar}>
				<div className={styles.logo}>
					<i className="fa-solid fa-mountain"></i>
					<h4>Thatharna camping</h4>
				</div>
				<ul className={`${styles.links} ${menuOpen ? styles.active : null}`}>
					<li>
						<Link href="/">
							Home
						</Link>
					</li>
					<li>
						<Link href="contact">
							Contact
						</Link>
					</li>
					<li>
						<Link href="#">
							About Us
						</Link>
					</li>
				</ul>
				<div onClick={handleClick} className={styles.hamburgerToggle}>
					<i class="fa-solid fa-bars"></i>
				</div>
			</nav>
		</>
	)
}
