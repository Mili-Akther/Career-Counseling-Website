import React, { createContext, useState } from 'react';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
const [user, setUser] = useState({
    name: "mili",
    email:" mili@gmail"
});

const authInfo = {
    user,
    setUser,
}
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;