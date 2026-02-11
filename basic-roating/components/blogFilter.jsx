import { useState } from "react";

const BlogFilter = ({ setSearchParams, postQuery }) => {
    const [search, setSearch] = useState(postQuery);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams(search ? { post: search } : {})
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ padding: '5px', borderRadius: '5px', margin: '0 10px' }}
            />
            <button
                type="submit"
                style={{ padding: '5px', borderRadius: '5px' }}
            >search</button>
        </form>
    )
}

export { BlogFilter }