import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hoocks/useAuth';
import { useState } from 'react';

const LoginPage = () => {
    const navigate = useNavigate();
    const locate = useLocation();
    const [name, setName] = useState();
    const { signIn } = useAuth();
    const fromPage = locate.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(name, () => navigate(fromPage, { replace: true }))
    }

    return (
        <div className='container'>
            <h1>login page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>
                    name:
                    <input
                        id='name'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ padding: '5px', borderRadius: '5px', margin: '0 10px' }}
                    />
                </label>
                <button
                    type='submit'
                    style={{ padding: '5px', borderRadius: '5px' }}
                >login</button>
            </form>
        </div>
    )
}

export { LoginPage };