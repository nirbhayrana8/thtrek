import { useEffect, useRef } from 'react'
import Image from 'next/image'
import title_image from "../public/images/test.jpg"
import { useNavbarContext } from "../contexts/NavbarThemeContext.js"
import styles from "../styles/HeroComponent.module.css"

export default function HeroComponent() {

	const containerRef = useRef();

	const { setIsThemeDataSlim } = useNavbarContext();

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.1451905
	}

	const callback = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.intersectionRatio <= 0.1451905 && entry.boundingClientRect.top < entry.rootBounds.top) {
				setIsThemeDataSlim(true);
			}

			if (entry.intersectionRatio > 0.1451905 && entry.boundingClientRect.top < entry.rootBounds.top) {
				setIsThemeDataSlim(false);
			}

		})
	}

	useEffect(() => {
		const observer = new IntersectionObserver(callback, options);
		observer.observe(containerRef.current);

		return () => {
			observer.disconnect();
		}
	}, []);


	return (
		<div ref={containerRef} className={styles.hero}>
			<div className={styles.image_box}>
				<Image src={title_image} alt="picture of our campsite" layout="fill"/>
			</div>
			<div className={styles.background_container}>
				<div className={styles.content_container}>
					<div className={styles.grid_container}>
						<div className={styles.hotel_info}>
							<h1>Thatharna Camping</h1>
							<p>Let the camping begin</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
