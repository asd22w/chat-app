import React, { useState } from 'react';

function LoginForm(props) {
    let [login, setLogin] = useState('');
    let [password, setPassword] = useState('');

    return (
        <div className='login-form-box'>
            <form onSubmit={ 
                (e) => { 
                    e.preventDefault();
                    props.handleSubmit(login, password);
                }
            }>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={ (e) => setLogin(e.target.value) } type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={ (e) => setPassword(e.target.value) } type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary login-btn">Log In</button>
                <a onClick={ () => props.register(true) } href="#" className="btn btn-primary register">Register</a>
            </form>
        </div>
    )
}

export default LoginForm;