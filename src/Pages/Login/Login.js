import React, { useContext } from 'react';
import { UserContext } from '../../UserAuthentication/UserAuthentication';

const Login = () => {
    const { loginWithGoogle } = useContext(UserContext);

    return (
        <div>
            <button onClick={loginWithGoogle}>Login</button>
        </div>
    );
};

export default Login;