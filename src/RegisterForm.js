import React, { useState } from 'react';

function RegisterForm(props) {
    let [login, setLogin] = useState('');
    let [password, setPassword] = useState('');
    let [username, setUsername] = useState('');

    return (
        <div className='login-form-box'>
            <form onSubmit={ 
                (e) => { 
                    e.preventDefault();
                    props.handleSubmit(login, password, username);
                }
            }>  
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={ (e) => setLogin(e.target.value) } type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleUsernameEmail1">Username</label>
                    <input onChange={ (e) => setUsername(e.target.value) } type="text" className="form-control" id="exampleUsernameEmail1"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={ (e) => setPassword(e.target.value) } type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary login-btn">Register</button>
                <a onClick={ () => props.register(false) } href="#" className="btn btn-primary register">Back</a>
            </form>
        </div>
    )
}

export default RegisterForm;