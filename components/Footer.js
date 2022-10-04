import styles from "../styles/Footer.module.css"

export default function Footer() {
  return (
	<footer>
		<div className={styles.footer}>
			<ul className={styles.items}>
				<li>Home</li>
				<li>About Us</li>
				<li>Contact</li>
			</ul>
		</div>
	</footer>
  )
}
