import {
    signApiHandel,
    loginApiHandel,
    logoutApiHandel,
    getUserApiHandel
} from "../api/api";

import { AuthCon } from "../contexts/auth.context";
import { showError, showSuccess } from "../utils/toaster";

const useAuth = () => {

    const { user, setUser, setLoader } = AuthCon()

    const sign = async (data) => {
        try {
            setLoader(true)
            const res = await signApiHandel(data)
            setUser(res?.user)
            localStorage.setItem('user', JSON.stringify(res?.user));
            showSuccess('Sign in successfully')
            setTimeout(() => {
                window.location.href = '/login'
            }, 1000)
        }
        catch (err) {
            if (err?.response?.status === 400) {
                showError('User already exist')
                setTimeout(() => {
                    window.location.href = '/login'
                }, 1000)
            }
            console.error(err)
        }
        finally {
            setLoader(false)
        }
    }

    const login = async (data) => {
        try {
            setLoader(true)
            const res = await loginApiHandel(data)
            setUser(res?.user)
            localStorage.setItem('user', JSON.stringify(res?.user));
            showSuccess('Logged in successfully')
            setTimeout(() => {
                window.location.href = '/'
            }, 1000)
        }
        catch (err) {
            if (err?.response?.status === 400) {
                showError('Invalid credentials')
            }
            console.error(err)
        }
        finally {
            setLoader(false)
        }
    }

    const logout = async () => {
        try {
            setLoader(true)
            await logoutApiHandel()
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            setUser(null)
            showSuccess('Logout successfully')
            setTimeout(() => {
                window.location.href = '/'
            }, 1000)
        }
        catch (err) {
            console.error(err)
        }
        finally {
            setLoader(false)
        }
    }

    const getUser = async () => {
        try {
            setLoader(true)
            const res = await getUserApiHandel(user?.id)
            setUser(res?.user)
            localStorage.setItem("user", JSON.stringify(res?.user))
            return res?.user
        }
        catch (err) {
            console.error(err)
        }
        finally {
            setLoader(false)
        }
    }

    return {
        sign,
        login,
        logout,
        getUser
    }
}

export default useAuth