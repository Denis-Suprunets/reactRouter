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

            <main className="main">
                <Outlet />
            </main>

            <footer className="footer">
                <div className="container footer__text">
                    {'\u00A9'} React Router
                </div>
            </footer>
        </>
    )
}

export { Layout };