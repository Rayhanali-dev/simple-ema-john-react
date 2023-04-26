import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext)
    
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        setError('');
        form.reset();
        if (password !== confirm) {
            setError('Password did not match! please try again.')
        } else if (password.length < 6) {
            setError('password must be an 6 characters or longer')
        }

        // create user
        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error.message);
        })

    }

    return (
        <div>
            <div className='form-container'>
                <h2 className='form-title'>Sign Up</h2>
                <div className="container">
                    <form onSubmit={handleSignUp}>
                        <div className='form-control'>
                            <label className='input-title' htmlFor="email">Email</label>
                            <input type="email" name='email' placeholder='Enter Your Email' required />
                        </div>
                        <div className='form-control'>
                            <label className='input-title' htmlFor="password">Password</label>
                            <input type="password" name='password' placeholder='Enter Your Password' required />
                        </div>
                        <div className='form-control'>
                            <label className='input-title' htmlFor="password">Confirm Password</label>
                            <input type="password" name='confirm' placeholder='Enter Your Password' required />
                        </div>
                        <div style={{ 'marginTop': '12px' }}>
                            <p>Already have an account? please <Link to={`/login`}>Login</Link></p>
                        </div>
                        <div style={{ color: 'red', fontSize: '18px' }}>
                            <p>{error}</p>
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;