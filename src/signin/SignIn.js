import { useState } from "react";
import './SignIn.css'

import Button from "../button/Button";
import ForgotPassword from "../forgotPassword/ForgotPassword";

function SignIn({onSignIn}) {
    const [signIn, setSignIn] = useState({
        username: '',
        password: '',
    });
    const [forgot, setForgot] = useState(false);
    const [errors, setErrors] = useState('')
    

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(signIn)
        })
        .then(r=>r.json())
        .then(user=>onSignIn(user))
    }

    function handleForgotPassword() {
        console.log('I forgot my password.');
        setForgot(true);
    }

    
    
    // conditionally render the forgot password component when `forgot` is true
    if (forgot) {
        return (
            <ForgotPassword setForgot={setForgot} errors={errors} setErrors={setErrors}/>
        )
    }

    //Otherwise, render the sign-in form  
    return (
        <form id='sign-in-form' className='form' onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <label htmlFor='username'>Username: </label>
            <input
                id='username'
                type='text'
                className={errors.length > 0 ? 'error-input' : undefined}
                value={signIn.username}
                onChange={(e) => setSignIn({ ...signIn, username: e.target.value })}
            />
            <label htmlFor='password'>Password: </label>
            <input
                id='password'
                type='password'
                className={errors.length > 0 ? 'error-input' : undefined}
                value={signIn.password}
                onChange={(e) => setSignIn({ ...signIn, password: e.target.value })}
            />
            {errors.length > 0 && 
                <span className='error-msg'>
                    <i className="fas fa-exclamation-triangle" /> {errors}
                </span>
            }
            <Button
                type='submit'
                text='Sign In'
                clickHandler={handleSubmit}
            />
            <Button
                type='button'
                text='Forgot Password?'
                clickHandler={handleForgotPassword}
                className='alt-button'
            />
        </form>
    )
}

export default SignIn;