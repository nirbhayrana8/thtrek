import React, { useState } from 'react'
import Link from 'next/link'

import styles from "../../styles/Navbar.module.css"

export default function Navbar() {

	const [menuOpen, setMenuOpen] = useState(false);

	const handleClick = () => {
		setMenuOpen(!menuOpen);
	}

	return (
		<>
			<nav className={styles.navbar}>
				<div className={styles.logo}>
					<i className="fa-solid fa-mountain"></i>
					<h4>Thatharna camping</h4>
				</div>
				<ul className={`${styles.links} ${menuOpen ? styles.active : null}`}>
					<li>
						<Link href="#">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a>Contact</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a>About Us</a>
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
