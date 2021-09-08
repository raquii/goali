import './SignIn.css'

import { useState } from "react";
import { useLoginMutation } from "../../features/api";
import { useHistory } from "react-router";

import Button from "../../components/button/Button";
import ForgotPassword from "../forgotPassword/ForgotPassword";


function SignIn() {
    const [signIn, setSignIn] = useState({
        username: '',
        password: '',
    });
    const [forgot, setForgot] = useState(false);
    const [errors, setErrors] = useState('')

    const history = useHistory();
    const [login] = useLoginMutation();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await login(signIn).unwrap()
            history.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    function handleForgotPassword() {
        setForgot(true);
    }

    // conditionally render the forgot password component when `forgot` is true
    if (forgot) {
        return (
            <ForgotPassword setForgot={setForgot} errors={errors} setErrors={setErrors} />
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