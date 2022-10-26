import { useState, useEffect, useRef } from 'react'
import Link from "next/link";
import { useNavbarContext } from "../contexts/NavbarThemeContext.js"
import styles from '../styles/MainHeader.module.css'

export default function MainHeader({ isDarkTheme }) {

	const initialTheme = isDarkTheme ? "TransparentBlack" : "TransparentWhite";

	const [menuOpen, setMenuOpen] = useState(false);
	const [windowScrolled, setWindowScrolled] = useState(false);

	const { isThemeDataSlim } = useNavbarContext();

	const hasWindowScrolled = useRef(false);

	const containerRef = useRef();

	useEffect(() => {
		containerRef.current.setAttribute("data-theme", initialTheme);
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		containerRef.current.setAttribute("data-scrolled", windowScrolled);
	}, [windowScrolled])

	useEffect(() => {
		containerRef.current.setAttribute("data-slim", isThemeDataSlim)
	}, [isThemeDataSlim])

	const handleClick = () => {
		setMenuOpen(!menuOpen);
	}

	const handleScroll = () => {

		if (hasWindowScrolled.current && window.scrollY == 0) {
			hasWindowScrolled.current = false;
			setWindowScrolled(false);
			return;
		}

		if (!hasWindowScrolled.current && window.scrollY > 0) {
			hasWindowScrolled.current = true;
			setWindowScrolled(true);
		}
	}

  return (
	<div ref={containerRef} className={styles.header_component_container}>
		<div className={styles.header_component_logo}>
				<i className="fa-solid fa-mountain"></i>
				<h4>Thatharna camping</h4>
			</div>
			<div className={`${styles.right_block} ${menuOpen ? styles.active : ""}`}>
				<div className={styles.nav_links}>
					<Link href="/">
						Home
					</Link>
				</div>
				<div className={styles.nav_links}>
					<Link href="contact">
						Contact
					</Link>
				</div>
			</div>
			<div onClick={handleClick} className={styles.hamburgerToggle}>
				<i className="fa-solid fa-bars"></i>
			</div>
	</div>
  )
}
