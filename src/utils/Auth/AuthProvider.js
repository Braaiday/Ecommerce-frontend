import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const tryGetAuthFromCookie = () => {
        if (localStorage.getItem('role') && localStorage.getItem('token')) return { role: localStorage.getItem('role'), token: localStorage.getItem('token') };
        if (!localStorage.getItem('role') && !localStorage.getItem('token')) return {};
    }
    const [auth, setAuth] = useState(tryGetAuthFromCookie());

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;