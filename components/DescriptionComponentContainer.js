import { useState, useEffect, useRef } from 'react'
import { useDescription } from "../contexts/DescriptionContext"
import styles from "../styles/DescriptionComponent.module.css"

export default function DescriptionComponent({ children }) {

	const containerRef = useRef();
	const data = useDescription()
	const { title } = data;

	const [animateContainer, setAnimateContainer] = useState(false);

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: [ 0, 0.05, 0.1, 0.15,
			0.2,
			0.25,
			0.3,
			0.35,
			0.39999999999999997,
			0.44999999999999996,
			0.49999999999999994,
			0.5499999999999999,
			0.6,
			0.65,
			0.7000000000000001,
			0.7500000000000001,
			0.8000000000000002,
			0.8500000000000002,
			0.9000000000000002,
			0.9500000000000003 ]
	}

	useEffect(() => {
		const observer = new IntersectionObserver(callback, options);
		observer.observe(containerRef.current);

		return () => {
			observer.disconnect();
		}
	}, [])

	const callback = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.intersectionRatio < 0.15 && entry.boundingClientRect.bottom > entry.rootBounds.bottom) {
				setAnimateContainer(false);
			}

			if (entry.intersectionRatio >= 0.2 && entry.boundingClientRect.bottom > entry.rootBounds.bottom) {
				setAnimateContainer(true);
			}
		})
	}

  return (
	<div className={styles.main_container}>
		<div ref={containerRef} className={styles.content_container}>
			<div className={`${styles.title_container} ${styles.fadeInView_component_to_fadeIn} ${animateContainer ? styles.fadeInView_component_is_inView : ""}`}>
				<h2 className={styles.title}>{title}</h2>
				<div className={`${styles.lineDivider_animated} ${styles.line_divider_appearence_dark}`}>
					<div className={styles.lineDivider_progressLine} style={{width: "100%"}}></div>
				</div>
			</div>
		</div>
		{children}
	</div>
  )
}
