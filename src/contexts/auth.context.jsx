/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect } from "react";
import { createContext, useState, useContext } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(false);

    useEffect(() => {

        const user = localStorage.getItem(`user`)
        if (user) {
            setUser(JSON.parse(user))
        }
    }, [])


    return (
        <AuthContext.Provider value={{ user, setUser, loader, setLoader }}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthCon = () => useContext(AuthContext)