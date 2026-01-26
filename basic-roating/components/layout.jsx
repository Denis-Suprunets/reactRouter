import { Outlet } from "react-router-dom";
import { CustomLink } from "./customLink";

const Layout = () => {
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <nav className='navigation'>
                        <CustomLink to="/">homepage</CustomLink>
                        <CustomLink to="/posts">posts</CustomLink>
                        <CustomLink to="/about">about</CustomLink>
                    </nav>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <div className="container">
                    I am the footer and i don't change myself
                </div>
            </footer>
        </>
    )
}

export { Layout };