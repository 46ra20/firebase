import React, { createContext } from 'react';
import app from '../Firebase/firebase.init';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const auth = getAuth(app);
export const UserContext = createContext();

const UserAuthentication = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle =()=>{
        signInWithPopup(auth, googleProvider)
        .then(result => console.log(result.user))
        .then(result => console.log(result))
    }

    const authValue = {loginWithGoogle};

    return (
        <UserContext.Provider value={authValue}>
            {children}
        </UserContext.Provider>
    );
};

export default UserAuthentication;