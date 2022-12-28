import React from 'react'
import Image from 'next/image'
import Paper from '@mui/material/Paper';
import styles from "../styles/DescriptionComponent.module.css"

export default function ImageCarouselItem({ image }) {
	const test = image;
	return (
		<Paper className={styles.carousel}>
			<Image className={styles.image} src={test.src} alt={test.alt} layout="fill"/>
		</Paper>
	)
}
