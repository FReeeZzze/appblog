import React from "react";
import { getUserById } from '../api/user';

const PostItem = ({ post }) => {
    const [author, setAuthor] = React.useState({
        email: '',
        name: '',
        avatar: ''
    })

    React.useEffect(() => {
        getUserById(post.author).then((res) => {
            setAuthor(res.result)
        })
    }, [post.author])

    return (
        <div>
            <h1>{post.title}</h1>
            <div>{post.text}</div>
            <div>
                {author.name}
            </div>
        </div>
    )
}

export default PostItem;