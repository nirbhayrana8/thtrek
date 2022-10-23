import React from 'react'
import Image from 'next/image'
import title_image from "../public/images/test.jpg"
import styles from "../styles/HeroComponent.module.css"

export default function HeroComponent() {
  return (
	<div className={styles.hero}>
		<div className={styles.image_box}>
			<Image src={title_image} alt="picture of our campsite" layout="fill"/>
		</div>
		<div className={styles.background_container}>
			<div className={styles.content_container}>
				<div className={styles.grid_container}>
					<div className={styles.hotel_info}>
						<h1>Thatharna Camping</h1>
						<p>A stylish campsite in Thatharna</p>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}
