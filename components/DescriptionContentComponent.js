import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from "../styles/DescriptionComponent.module.css"
import { useDescription } from "../contexts/DescriptionContext"
import ImageCarousel from './ImageCarousel';

export default function DescriptionContentComponent() {

	const data = useDescription();
	const { content, images, index } = data;

	const containerRef = useRef();

	const [animateContainer, setAnimateContainer] = useState(false);
	console.log(`rerender ${index + 1} with animate: ${animateContainer}`);

	const options = {
		root: null,
		rootMargin: "0px 0px 50px",
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
		<div ref={containerRef} className={`${styles.content_container} ${isContentAlternate && styles.alternate_components}`}>
			<div className={`${styles.text_container} ${styles.fadeInView_component_to_fadeIn} ${animateContainer && styles.fadeInView_component_is_inView}`}>
				<p className={styles.description} dangerouslySetInnerHTML={createMarkup()}></p>
			</div>
			<div className={`${styles.image_container} ${styles.slideUpInView_component_to_slideUp} ${animateContainer && styles.slideUpInView_component_is_inView}`}>
				<ImageCarousel className={`${styles.image_container}`} images={images}/>
			</div>
		</div>
  )
}
