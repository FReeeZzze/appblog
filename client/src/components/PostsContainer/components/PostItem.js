import React from "react";
import { Upload } from "api";
import { serverAddr } from 'constants/server';
import { fetchAuthorByPost } from "store/thunks/postsThunk";
import { useDispatch, useSelector } from "react-redux";

const PostItem = ({ post }) => {
    const [message, setMessage] = React.useState({
        text: '',
        files: []
    })
    const { authorsPosts } = useSelector((state) => state.posts)
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchAuthorByPost(post._id, post.author))
    }, [dispatch, post.author, post._id])


    React.useEffect(() => {
        const media = post.message.files
        if (media.length > 0) {
            const files = []
            media.forEach(async (fileId) => {
                try {
                    if(fileId) {
                        const { result } = await Upload.getFileById(fileId)
                        files.push(result)
                    }
                } catch (e) {
                    console.log(e.message)
                }
            })

            setMessage({ text: post.message.text, files})
        }

        else {
            setMessage(post.message)
        }
    }, [post.message])

    return (
        <div className="card mb-5">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                    {message.text}
                </p>
                {message.files.length > 0 && 
                        message.files
                            .map((item) => 
                                <img
                                    className="img-thumbnail img-fluid" 
                                    width="200" height="200"
                                    key={`key:img${item._id}`} 
                                    src={`${serverAddr}/${item.url}`} 
                                    alt="media" 
                                />
                )}
            </div>
            <div className="card-footer">
                {authorsPosts[post._id]?.name}
            </div>
        </div>
    )
}

export default React.memo(PostItem);