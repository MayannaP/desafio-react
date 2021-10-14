import { createContext, useContext, useState } from 'react'

export const SelectedServersContext = createContext({}); 

export const SelectedServersProvider = (props) => { 
  const [ selectedServers, setSelectedServers] = useState([]); 
  
  return(
    <SelectedServersContext.Provider value={{selectedServers, setSelectedServers}}>
      {props.children}
    </SelectedServersContext.Provider>
  )
}

export const useSelectedServers = ()=> useContext(SelectedServersContext);