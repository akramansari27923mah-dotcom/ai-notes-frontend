import api from "../utils/axios";

export const signApiHandel = async (datas) => {
    const res = await api.post('/auth/register', datas)
    return res.data
}

export const loginApiHandel = async (data) => {
    const res = await api.post('/auth/login', data)
    return res.data
}

export const logoutApiHandel = async () => {
    const res = await api.post('/auth/logout')
    return res.data
}

export const getUserApiHandel = async (id) => {
    const res = await api.get('/auth/get-me', id)
    return res.data
}

export const getDataApiHandel = async (formData) => {
    const res = await api.post('/ai', formData)
    return res.data
}

export const getNotesApiHandel = async () => {
    const res = await api.get('/ai/history');
    return res.data
}

export const getChatApiHandel = async (formData) => {
    const res = await api.post('/ai/chat', formData);
    return res.data
}