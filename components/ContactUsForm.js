import { useState, useEffect} from "react"
import styles from "../styles/ContactUsForm.module.css"
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function ContactUsForm() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

  return (
	<>
		<Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
			<DialogContent>
			<div className={styles.container}>
				<div className={styles.left_block}>
					<p>Sample text</p>
				</div>
				<div className={styles.right_block}>
					<TextField
						autoFocus
						label="Name"
						margin="dense"
						variant="standard"
						value={name}
						onChange={(e) => setName(e.target.value)}/>
					<TextField
						label="Email"
						margin="dense"
						variant="standard"
						value={email}
						onChange={(e) => setEmail(e.target.value)} />
					<TextField
						label="Phone"
						margin="dense"
						variant="standard"
						value={phone}
						onChange={(e) => setPhone(e.target.value)} />
				</div>
			</div>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
				<Button onClick={() => setIsDialogOpen(false)}>Submit</Button>
			</DialogActions>
		</Dialog>
		<Button onClick={() => setIsDialogOpen(true)}>Open Dialog</Button>
	</>
  )
}
