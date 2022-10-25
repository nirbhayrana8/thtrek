import React, { useContext } from 'react'

const DescriptionContext = React.createContext()

export function useDescription() {
	return useContext(DescriptionContext);
}

export function DescriptionContextProvider({ children, data }) {
  return (
	<DescriptionContext.Provider value={data}>
		{children}
	</DescriptionContext.Provider>
  )
}
