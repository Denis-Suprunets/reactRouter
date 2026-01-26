import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Spiner } from "../components/spiner";

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    const goBack = () => { navigate(-1) }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    return (
        <div className="container">
            {!post && <Spiner />}
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Link
                            to={`/posts/${id}/edit`}
                            className='link'
                            style={{ fontSize: '24px' }}
                        >Edit post</Link>
                        <button
                            onClick={goBack}
                            style={{ padding: '10px', borderRadius: '5px' }}
                        >go back</button>
                    </div>
                </>
            )}
        </div>
    )
}

export { PostPage };