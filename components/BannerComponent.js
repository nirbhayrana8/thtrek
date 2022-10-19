import styles from "../styles/BannnerComponent.module.css"


export default function BannerComponent() {
  return (
	<div className={styles.banner_component_root}>
		<div className={styles.banner_component_content_container}>
		<span className={styles.banner_component_title}>Feel free to call with any questions here</span>
		<span>+91-9459210765</span>
		</div>
    </div>
  )
}
