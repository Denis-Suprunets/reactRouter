import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    const match = useMatch(to);

    return (
        <Link
            to={to}
            {...props}
            className={(match ? 'header__link_aktive' : '') + ' header__link'}
        >
            {children}
        </Link>
    )
}

export { CustomLink };