import { Outlet, Link } from 'react-router-dom'

const AboutPage = () => {
    return (
        <div className="container">
            <h1>Aboutpage</h1>
            <p>
                some tekst about post
            </p>
            <div className='about-link__container'>
                <Link to='contacts' className="link">contacts</Link>
                <Link to='team' className="link">team</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
};

export { AboutPage };