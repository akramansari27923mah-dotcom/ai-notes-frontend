/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState, useContext } from "react"

const ChatContext = createContext()

export const ChatProvider = ({ children }) => {

    const [message, setMessage] = useState([])
    const [loader, setLoader] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [pdfValue, setPdfValue] = useState('')


    return (
        <ChatContext value={{ message, setMessage, loader, setLoader, inputValue, setInputValue, pdfValue, setPdfValue }}>
            {children}
        </ChatContext>
    )
}

export const chatCon = () => useContext(ChatContext)