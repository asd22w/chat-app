import React, { useState } from 'react';
import LoginForm from './LoginForm.js';
import RegisterForm from './RegisterForm.js';

function LoginPage(props) {
    let [register, setRegister] = useState(false);

    return (
        <div className='login-container'>
            { register ? <RegisterForm register={ setRegister } handleSubmit={ props.register } /> : <LoginForm handleSubmit={ props.login } register={ setRegister } /> }
        </div>
    )
}

export default LoginPage;