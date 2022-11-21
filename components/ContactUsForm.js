import { useState, useEffect} from "react"
import TextInput from '../components/TextInput'
import styles from "../styles/ContactUsForm.module.css"

export default function ContactUsForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

  return (
	<div className={styles.container} style={{"backgroundColor" : "inherit", "color" : "inherit"}}>
		<TextInput label="Name" value={name} onChange={setName} />
		<TextInput label="Email" value={email} onChange={setEmail} />
		<TextInput label="Phone" value={phone} onChange={setPhone} />

	</div>
  )
}
