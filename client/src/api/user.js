import { serverAddr } from  '../constants'

export const registerUser = async ({ email, name, password }) => {
    const response = await fetch(`${serverAddr}/api/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, name, password })
    })
    return response.json();
}

export const loginUser = async ({ email, password }) => {
    const response = await fetch(`${serverAddr}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    return response.json();
}

export const getMe = async (token) => {
    const response = await fetch(`${serverAddr}/api/user/me`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.json();
}

export const getUserById = async (id) => {
    const response = await fetch(`${serverAddr}/api/users/${id}`)
    return response.json();
}