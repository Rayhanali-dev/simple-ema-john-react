import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {
    const [show, setShow] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <div className="container">
                <form onSubmit={handleSignIn}>
                    <div className='form-control'>
                        <label className='input-title' htmlFor="email">Email</label>
                        <input type="email" name='email' placeholder='Enter Your Email' required />
                    </div>
                    <div className='form-control'>
                        <label className='input-title' htmlFor="password">Password</label>
                        <input type={show ? 'text' : 'password'} name='password' placeholder='Enter Your Password' required />
                    </div>
                    <div style={{fontSize: '18px', marginTop: '12px', display: 'inline-block'}}>
                        <p onClick={() => setShow(!show)}>
                            {
                                show ? <span>Hide Password</span> : <span>Show Password</span>
                            }
                        </p>
                    </div>
                    <div style={{ 'marginTop': '12px' }}>
                        <p>New to Ema-john? <Link to={`/signup`}>Create New Account</Link></p>
                    </div>
                    <button>LogIn</button>
                </form>
            </div>
        </div>
    );
};

export default Login;