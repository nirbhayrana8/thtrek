import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from "../styles/DescriptionComponent.module.css"

export default function DescriptionContentComponent({ content, image, index }) {

	const containerRef = useRef();

	const [isContainerVisible, setIsContainerVisible] = useState(false);

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.15
	}

	let isContentAlternate = false;

	if ((index + 1) % 2 == 0) {
		isContentAlternate = true;
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

	function createMarkup() {
		return {__html: content}
	}
  return (
	<>
		{isContentAlternate ?
		(
			<div ref={containerRef} className={styles.content_container}>
				<div className={`${styles.image_container} ${styles.slideUpInView_component_to_slideUp} ${isContainerVisible ? styles.slideUpInView_component_is_inView : ""}`}>
					<Image className={styles.image} src={image.src} alt={image.alt} layout="fill"/>
				</div>
				<div className={`${styles.text_container} ${styles.fadeInView_component_to_fadeIn} ${isContainerVisible ? styles.fadeInView_component_is_inView : ""}`}>
					<p className={styles.description} dangerouslySetInnerHTML={createMarkup()}></p>
				</div>
		</div>
		) :
		(
			<div ref={containerRef} className={styles.content_container}>
				<div className={`${styles.text_container} ${styles.fadeInView_component_to_fadeIn} ${isContainerVisible ? styles.fadeInView_component_is_inView : ""}`}>
					<p className={styles.description} dangerouslySetInnerHTML={createMarkup()}></p>
				</div>
				<div className={`${styles.image_container} ${styles.slideUpInView_component_to_slideUp} ${isContainerVisible ? styles.slideUpInView_component_is_inView : ""}`}>
					<Image className={styles.image} src={image.src} alt={image.alt} layout="fill"/>
				</div>
		</div>
		)}
	</>
  )
}
