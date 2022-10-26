import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from "../styles/DescriptionComponent.module.css"
import { useDescription } from "../contexts/DescriptionContext"

export default function DescriptionContentComponent() {

	const data = useDescription();
	const { content, image, index } = data;

	const containerRef = useRef();

	const [animateContainer, setAnimateContainer] = useState(false);

	const options = {
		root: null,
		rootMargin: "0px 0px 50px",
		threshold: [0, 0.15]
	}

	let isContentAlternate = false;

	if ((index + 1) % 2 == 0) {
		isContentAlternate = true;
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

			if (entry.intersectionRatio >= 0.15 && entry.boundingClientRect.bottom > entry.rootBounds.bottom) {
				setAnimateContainer(true);
			}
		})
	}

	function createMarkup() {
		return {__html: content}
	}
  return (
		<div ref={containerRef} className={`${styles.content_container} ${isContentAlternate ? styles.alternate_components : ""}`}>
			<div className={`${styles.text_container} ${styles.fadeInView_component_to_fadeIn} ${animateContainer ? styles.fadeInView_component_is_inView : ""}`}>
				<p className={styles.description} dangerouslySetInnerHTML={createMarkup()}></p>
			</div>
			<div className={`${styles.image_container} ${styles.slideUpInView_component_to_slideUp} ${animateContainer ? styles.slideUpInView_component_is_inView : ""}`}>
				<Image className={styles.image} src={image.src} alt={image.alt} layout="fill"/>
			</div>
		</div>
  )
}
