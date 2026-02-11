import { useRouteError } from 'react-router-dom';

const ErroPage = () => {
    const error = useRouteError()

    return (
        <div className='container'>
            <h1>{error.status}</h1>
            <p>{error.statusText}</p>
        </div>
    )
}

export { ErroPage };