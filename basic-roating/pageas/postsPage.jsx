import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spiner } from "../components/spiner";

const PostsPage = () => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div className="container">
            <h1>Postpage</h1>
            {!posts.length && <Spiner />}
            <ul>
                {
                    posts.map((post) => (
                        <Link key={post.id} to={`/posts/${post.id}`} className="link">
                            <li>{post.title}</li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
};

export { PostsPage };