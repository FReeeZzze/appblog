import { serverAddr } from  '../constants'

export const getPostsByPage = async (page='') => {
    const response = await fetch(`${serverAddr}/api/posts/${page}`)
    return response.json()
}

export const createPost = async ({ title, text, token }) => {
    const response = await fetch(`${serverAddr}/api/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title, text })
    })
    return response.json();
}