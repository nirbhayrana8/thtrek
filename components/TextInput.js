import styles from "../styles/Input.module.css"

export default function Input({ label, required, value, onChange }) {

	return (
		<div className={styles.container}>
			<label style={{"backgroundColor" : "inherit", "color" : "inherit"}} aria-label={label}>
				<input
				className={styles.input}
				type="text"
				placeholder=" "
				value={value}
				required={required ? required : false}
				onChange={(e) => onChange(e.target.value)}/>
				<span className={styles.label}>{label}</span>
			</label>
		</div>
	)
}
