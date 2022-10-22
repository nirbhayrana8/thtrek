import { useState, useEffect, useRef } from 'react'
import DescriptionContentComponent from './DescriptionContentComponent';
import styles from "../styles/DescriptionComponent.module.css"

export default function DescriptionComponent({ title, content, image, index }) {

	const containerRef = useRef();

	const [isContainerVisible, setIsContainerVisible] = useState(false);

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.25
	}

	useEffect(() => {
		const observer = new IntersectionObserver(callback, options);
		observer.observe(containerRef.current);

		return () => {
			observer.unobserve(containerRef.current);
		}
	}, [])

	const callback = (entries, observer) => {
		console.log(entries.length);
		const [entry] = entries;
		if (entry.isIntersecting) {
			setIsContainerVisible(true)
			return;
		}
		setIsContainerVisible(false);
	}

  return (
	<div className={styles.main_container}>
		<div ref={containerRef} className={styles.content_container}>
			<div className={`${styles.title_container} ${styles.fadeInView_component_to_fadeIn} ${isContainerVisible ? styles.fadeInView_component_is_inView : ""}`}>
				<h2 className={styles.title}>{title}</h2>
				<div className={`${styles.lineDivider_animated} ${styles.line_divider_appearence_dark}`}>
					<div className={styles.lineDivider_progressLine} style={{width: "100%"}}></div>
				</div>
			</div>
		</div>
		<DescriptionContentComponent content={content} image={image} index={index}/>
	</div>
  )
}
