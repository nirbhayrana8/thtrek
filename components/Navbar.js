import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

import styles from "../styles/Navbar.module.css"

export default function Navbar({ isDarkTheme }) {

	const theme = isDarkTheme ? "TransparentBlack" : "TransparentWhite"

	const [menuOpen, setMenuOpen] = useState(false);

	const [navbarTheme, setNavbarTheme] = useState(theme);

	const [windowScrolled, setWindowScrolled] = useState(false);

	const navbarRef = useRef();

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		navbarRef.current.setAttribute("data-theme", navbarTheme);

		navbarRef.current.setAttribute("data-scrolled", windowScrolled);
	}, [navbarTheme, windowScrolled])

	const handleClick = () => {
		setMenuOpen(!menuOpen);
	}

	const handleScroll = () => {

		if (window.scrollY == 0) {
			setWindowScrolled(false);
		}

		if (window.scrollY > 0) {
			setWindowScrolled(true);
		}

		if (window.scrollY >= 80) {
			setNavbarTheme("White")
			return;
		}
		setNavbarTheme(theme);
	}

	return (
		<>
			<nav ref={navbarRef} className={styles.navbar}>
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
