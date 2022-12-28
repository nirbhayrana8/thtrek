import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image'
import styles from "../styles/DescriptionComponent.module.css"


export default function ImageCarousel({ images }) {

	return (
		<Swiper className={styles.carousel_item}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        >
			{images.map((image, index) =>
			<SwiperSlide key={index} >
				<Image className={styles.image} src={image.src} alt={image.alt} layout="fill"/>
			</SwiperSlide>)}
		</Swiper>
	)
}
