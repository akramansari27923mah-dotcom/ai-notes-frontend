const apiUrl = window.location.hostname === 'localhost' ? 'http://localhost:4001/api' : import.meta.env.VITE_API_URL

if (!apiUrl) throw new Error("API MISSING");

export const config = {
    apiUrl
}
