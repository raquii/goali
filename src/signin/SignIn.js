import { useState } from "react";
import './SignIn.css'

import Button from "../Button/Button";

function SignIn() {
    const [signIn, setSignIn] = useState({
        username: '',
        password: ''
    });

    const [forgot, setForgot] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(signIn);
    }

    function handleForgotPassword(){
        console.log('I forgot my password.');
    }

    const forgotPassword = () => {
        return(
            <div id='forgot-pass'>
                <label htmlFor='email'>Email:</label>
                <input
                    id='email'/>
            </div>
        )
    }

    return ( 
        <form id='sign-in-form' className='form' onSubmit={handleSubmit}>
            <label htmlFor='username'>Username: </label>
            <input
                id='username'
                type='text'
                value={signIn.username}
                onChange={(e) => setSignIn({ ...signIn, username: e.target.value })}
            />
            <label htmlFor='password'>Password: </label>
            <input
                id='password'
                type='password'
                value={signIn.password}
                onChange={(e) => setSignIn({ ...signIn, password: e.target.value })}
            />
            <Button
                type='submit'
                text='Sign In'
                clickHandler={handleSubmit}
            />
            <Button
                type='button'
                text='Forgot Password?'
                clickHandler={handleForgotPassword}
                className='forgot'
            />
        </form>

    )

}

export default SignIn;