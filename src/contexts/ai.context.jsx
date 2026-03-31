/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState, useContext, useEffect } from "react";
import { AuthCon } from "./auth.context";

const AiContext = createContext();

export const AiProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(false);
    const [previewDitact, setPreviewDitact] = useState('')
    const { user } = AuthCon();

    useEffect(() => {
        const view = localStorage.getItem('view')

        if (view) {
            setPreviewDitact(view)
        }
    }, [])

    useEffect(() => {
        if (user?._id) {
            const res = localStorage.getItem(`data_${user._id}`);

            if (res) {
                setData(JSON.parse(res));
            }
        }
    }, [user])

    return (
        <AiContext.Provider value={{ data, setData, loader, previewDitact, setPreviewDitact, setLoader }}>
            {children}
        </AiContext.Provider>
    );
};

export const aiContext = () => useContext(AiContext);