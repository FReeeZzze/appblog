import { serverAddr } from  'constants/server';
import axios from 'axios';

const instance = axios.create({
    baseURL: serverAddr
})

export const Posts = {
    create: async (data, token) => {
        try {
            const response = await instance({
                method: 'POST',
                url: '/api/posts',
                headers: {
                    'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${token}`,
                },
                data: JSON.stringify(data)
            })
            return response.data;
        } catch(e) {
            console.log(e.message)
        }
    },
    getPostsByPage: async (page='') => {
        try {
            const response = await instance.get(`/api/posts/${page}`)
            return response.data;
        } catch(e) {
            console.log(e.message)
        }
    }
}

export const Upload = {
    uploadMedia: async (file, token) => {
        try {
            const response = await instance({
                url: '/api/files',
                method: 'post',
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                },
                data: file 
            })
            return response.data;
        } catch(e) {
            console.log(e.message)
        }
    },
    getFileById: async (id) => {
        try {
            const response = await instance.get(`/api/files/${id}`)
            return response.data;
        } catch(e) {
            console.log(e.message)
        }
    }
}

export const User = {
    registerUser: async ({ email, name, password }) => {
        try {
            const response = await instance({
                method: 'POST',
                url: '/api/auth/register',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({ email, name, password })
            })
            return response.data;
        }catch (e) {
            console.log(e.message)
        }
    },
    loginUser: async ({ email, password }) => {
        try {
            const response = await instance({
                method: 'POST',
                url: '/api/auth/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({ email, password })
            })
            return response.data;
        } catch (e) {
            console.log(e.message)
        }
    },
    getMe: async (token) => {
        try {
            const response = await instance({
                method: 'GET',
                url: '/api/users/me',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return response.data;
        }catch(e) {
            console.log(e.message)
        }
    },
    getUserById: async (id) => {
        try {
            const response = await axios.get(`/api/users/${id}`)
            return response.data;
        } catch(e) {
            console.log(e.message)
        }
    }
}