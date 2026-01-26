import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hoocks/useAuth";

const EditPostPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { signOut } = useAuth();

    const handleLogout = (e) => {
        e.preventDefault();
        signOut(() => navigate('/', { replace: true }));
    }

    return (
        <div className="container">
            <h1>{`Edit post ${id}`}</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button
                    onClick={handleLogout}
                    style={{ padding: '10px', borderRadius: '5px' }}
                >logout</button>
            </div>
        </div>
    )
}

export { EditPostPage };