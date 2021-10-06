import React from 'react';
import './App.css';
import { getPostsByPage } from './api/posts'
import RegistrationForm from './components/RegistrationForm';
import PostItem from './components/PostItem';

function App() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: ''
  })

  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    getPostsByPage().then((res) => {
      setPosts(res.result)
    })
  }, [])

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setForm((prev) => {
      return {...prev, [name]: value }
    })
  }

  return (
    <div className="App">
      <RegistrationForm form={form} handleChangeForm={handleChange} />
      <div>
        <h1>Посты</h1>
        {posts.length && posts.map((post) => <PostItem key={`key:${post._id}`} post={post} />)}
      </div>
    </div>
  );
}

export default App;
