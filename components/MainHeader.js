import { useState, useEffect, useRef } from 'react'
import Link from "next/link";
import styles from '../styles/MainHeader.module.css'

export default function MainHeader({ isDarkTheme }) {

	const initialTheme = isDarkTheme ? "TransparentBlack" : "TransparentWhite";

	const [menuOpen, setMenuOpen] = useState(false);

	const [theme, setTheme] = useState(initialTheme);

	const [windowScrolled, setWindowScrolled] = useState(false);

	const containerRef = useRef();

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	})

	useEffect(() => {
		containerRef.current.setAttribute("data-theme", theme);

		containerRef.current.setAttribute("data-scrolled", windowScrolled);
	}, [theme, windowScrolled])

	const handleClick = () => {}

	const handleScroll = () => {

		if (window.scrollY == 0) {
			setWindowScrolled(false);
		}

		if (window.scrollY > 0) {
			setWindowScrolled(true);
		}

		if (window.scrollY >= 100) {
			setTheme("White");
		}
	}

  return (
	<div ref={containerRef} className={styles.header_component_container}>
		<div className={styles.header_component_logo}>
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
			</ul>
			<div onClick={handleClick} className={styles.hamburgerToggle}>
				<i class="fa-solid fa-bars"></i>
			</div>
	</div>
  )
}
