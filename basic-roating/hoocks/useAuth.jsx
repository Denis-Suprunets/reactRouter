import { useContext } from 'react';
import { AuthContext } from '../hoc/authProvider';

const useAuth = () => {
    return useContext(AuthContext);
}

export { useAuth }