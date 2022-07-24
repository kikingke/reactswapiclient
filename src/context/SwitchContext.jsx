import { createContext, useState } from 'react'

export const SwitchContext = createContext()

export const MyProvider = ({ children }) => {
    const [status, setStatus] = useState(false)
    return (
        <SwitchContext.Provider value={{ status, setStatus }}>
            {children}
        </SwitchContext.Provider>
    )
}
