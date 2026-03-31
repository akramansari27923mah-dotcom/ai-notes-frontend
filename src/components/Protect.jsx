/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { AuthCon } from "../contexts/auth.context"
import { useNavigate } from "react-router-dom"
import useAuth from "../hooks/auth.hook"
import { showError } from "../utils/toaster"
import { LoaderCircle } from "lucide-react"
const Protect = ({ children }) => {
    const { loader } = AuthCon()
    const navigate = useNavigate()
    const { getUser } = useAuth()

    useEffect(() => {
        const checkUser = async () => {
            const res = await getUser()
            if (!res) {
                navigate('/login')
                showError('Unauthorized')
            }
        }
        checkUser()
    }, [])

    if (loader) return (
        <div className="flex justify-center items-center h-screen">
            <LoaderCircle className="animate-spin" size={30}/>
        </div>
    )

    return children
}

export default Protect