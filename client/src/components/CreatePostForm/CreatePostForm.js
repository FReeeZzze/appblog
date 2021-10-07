import React from 'react';
import { createPostThunk } from 'store/thunks/postsThunk';
import { useDispatch, useSelector } from 'react-redux';
import { uploadMedia } from 'store/thunks/mainThunk';

const CreatePostForm = () => {
    const dispatch = useDispatch();
    const { upload } = useSelector((state) => state.main)
    const [form, setForm] = React.useState({
        title: '',
        text: '',
        files: []
    })

    const [file, setFile] = React.useState(null);
    const [isForm, setActive] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPostThunk({ title: form.title, message: { text: form.text, files: form.files }}))
        setActive((prev) => !prev)
    }

    const handleChangeForm = (e) => {
        const value = e.target.value
        const name = e.target.name

        setForm((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleUploadFile = (e) => {
        const selectedFile = e.target.files[0]
        const formData = new FormData();
		formData.append('fileData', selectedFile);
        setFile(formData)
    }

    React.useEffect(() => {
        setForm((prev) => {
            return {...prev, files: [upload._id]}
        })
    }, [upload])

    const handleUpload = () => {
        if (file) {
            dispatch(uploadMedia(file))
        }
    }

    return (
        <div className="d-flex justify-content-end align-items-center">
            <button onClick={() => setActive((prev) => !prev)} className="btn btn-primary">Создать пост</button>
            {isForm && 
                <div className="card card-body mb-3 mt-3 bg-light">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="titlePost" className="form-label">Название поста</label>
                            <input 
                                id="titlePost" 
                                name="title" 
                                value={form.title} 
                                onChange={handleChangeForm}
                                className="form-control" 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="textPost">Текст</label>
                            <textarea 
                                id="textPost" 
                                name="text" 
                                value={form.text} 
                                onChange={handleChangeForm}
                                className="form-control" 
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mb-3">Выложить пост</button>
                    </form>
                    <div className="input-group mb-3 mt-3">
                        <div className="custom-file">
                            <label className="custom-file-label" htmlFor="inputGroupFile">
                                {(file && file.get('fileData').name) || 'Выбрать файл'}
                            </label>
                            <input 
                                type="file" 
                                className="custom-file-input" 
                                id="inputGroupFile" 
                                aria-describedby="inputGroupFileAddon"
                                onChange={handleUploadFile} 
                            />
                        </div>
                        <div className="input-group-append">
                            <button className="btn btn-primary" onClick={handleUpload}>Загрузить</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CreatePostForm;