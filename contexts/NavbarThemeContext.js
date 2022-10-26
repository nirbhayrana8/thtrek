import React, { useState, useContext } from 'react'

const NavbarThemeContext = React.createContext();

export function useNavbarContext() {
	return useContext(NavbarThemeContext);
}

export function NavbarThemeContextProvider({ children }) {
	const [isThemeDataSlim, setIsThemeDataSlim] = useState(false);
	const value = {isThemeDataSlim, setIsThemeDataSlim}

	return (
		<NavbarThemeContext.Provider value={value}>
			{children}
		</NavbarThemeContext.Provider>
	)
}
