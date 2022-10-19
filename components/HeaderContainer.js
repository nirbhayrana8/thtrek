import { useState, useEffect, useRef } from 'react'
import styles from "../styles/HeaderContainer.module.css"

export default function HeaderContainer({ children }) {
	let scroll = useRef(0);

	const [headerStyle, setHeaderStyle] = useState({});

	useEffect(() => {
	  window.addEventListener("scroll", handleScoll);
	  return () => window.removeEventListener("scroll", handleScoll);
	}, [])

	const handleScoll = () => {
	  if (window.scrollY > scroll.current) {
		setHeaderStyle({
		  "marginTop": "-44.8px"
		})
	  }
	  else {
		setHeaderStyle({});
	  }
	  scroll.current = window.scrollY;
	}


  return (
	<div style={headerStyle} className={`${styles.header_component_root} ${styles.header_component_fixed}`}>
		{children}
	</div>
  )
}
