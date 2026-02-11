import { Suspense } from "react";
import { Link, useNavigate, useLoaderData, Await, useAsyncValue } from "react-router-dom";
import { Spiner } from "../components/spiner";

const Post = () => {
    const awaitedPost = useAsyncValue();
    return (
        <>
            <h1>{awaitedPost.title}</h1>
            <p>{awaitedPost.body}</p>
        </>
    )
}

const PostPage = () => {
    const navigate = useNavigate();
    const goBack = () => { navigate(-1) };
    const { post, id } = useLoaderData();

    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
            <>
                <Suspense fallback={<Spiner />}>
                    <Await resolve={post}>
                        <Post />
                        <Link
                            to={`/posts/${id}/edit`}
                            className='link'
                            style={{ fontSize: '24px', marginLeft: 'auto' }}
                        >Edit post</Link>
                    </Await>
                </Suspense>

                <div >
                    <button
                        onClick={goBack}
                        style={{ padding: '10px', borderRadius: '5px' }}
                    >go back</button>
                </div>
            </>
        </div>
    )
}

const postLoader = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if (!res.ok) {
        throw new Response('', { status: res.status, statusText: 'Not found single post !!!' })
    }

    return {
        post: res.json(),
        id: params.id
    }
}

export { PostPage, postLoader };