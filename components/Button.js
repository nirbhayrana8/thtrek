import React from 'react'
import styles from "../styles/Button.module.css"

export default function Button({ text, onClick }) {
  return (
	<div className={styles.container}>
		<button onClick={onClick}>{text}</button>
	</div>
  )
}
