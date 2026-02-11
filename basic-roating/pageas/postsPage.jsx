import { Await, Link, useLoaderData, useSearchParams } from "react-router-dom";
import { Spiner } from "../components/spiner";
import { BlogFilter } from "../components/blogFilter";
import { Suspense } from "react";

const PostsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('post') || '';
    const { posts } = useLoaderData();

    return (
        <div className="container">
            <h1>Postpage</h1>

            <Suspense fallback={<Spiner />}>
                <Await resolve={posts}>
                    {
                        (resolvedPosts) => (
                            <>
                                <BlogFilter setSearchParams={setSearchParams} postQuery={postQuery} />
                                <ul>
                                    {
                                        resolvedPosts.filter(post => post.title.includes(postQuery.toLowerCase())).map((post) =>
                                            <Link key={post.id} to={`/posts/${post.id}`} className="link">
                                                <li>{post.title}</li>
                                            </Link>
                                        )
                                    }
                                </ul>
                            </>
                        )
                    }
                </Await>
            </Suspense>
        </div>
    )
};

const postsLoader = async ({ request, params }) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) {
        throw new Response('', { status: res.status, statusText: 'Not found posts list !!!' })
    }

    return {
        posts: res.json()
    }
}

export { PostsPage, postsLoader };