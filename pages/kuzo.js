import React, { useState, useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import ImageCarouselItem from '../components/ImageCarouselItem';
import styles from "../styles/DescriptionComponent.module.css"
import data from "../public/content.json"

export default function Kuzo() {
	const images = data.map(d => d.image)
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		console.log(current)
	}, [current])

	const handleNext = () => {
		if (current == images.length - 1) {
			setCurrent(0);
			return;
		}
		setCurrent((prev) => prev + 1);
	}

	const handlePrev = () => {
		if (current == 0) {
			setCurrent(images.length - 1);
			return;
		}
		setCurrent((prev) => prev - 1);
	}

	return (
		<Carousel height="600px" next={handleNext} prev={handlePrev}>
			{images.map((image, index) => <ImageCarouselItem className={styles.image} key={index} image={image} />)}
		</Carousel>
	)
}
