const apiUrl = import.meta.env.VITE_API_URL

if (!apiUrl) throw new Error("API MISSING");

export const config = {
    apiUrl
}
