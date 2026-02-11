import { createContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = (user, cb) => {
        setUser(user);
        cb();
    }
    const signOut = (cb) => {
        setUser(null);
        cb();
    }

    const userValue = { user, signIn, signOut }

    return <AuthContext.Provider value={userValue}>
        {children}
    </AuthContext.Provider>
}

export { AuthContext, AuthProvider }