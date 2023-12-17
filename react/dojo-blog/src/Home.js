import { useState, useEffect } from 'react';
import BlogList from './BlogList.js';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null); 

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:8000/blogs');
                const data = await res.json();
                setIsPending(false);
                setError(null);
                setBlogs(data); 
            } catch(err) {
                console.log(err.message);
                // throw Error('could not fetch the data for that resource');
                setError(err.message);
                setIsPending(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="hame">
            { error && <div>{ error }</div> }
            { isPending && <div> Loading ...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={ handleDelete } /> }
        </div>
    );
}

export default Home;