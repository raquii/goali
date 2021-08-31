import { useState } from "react";
import './SignIn.css'

import Button from "../Button/Button";

function SignIn() {
    const [signIn, setSignIn] = useState({
        username: '',
        password: ''
    });

    const [forgot, setForgot] = useState(false);
    const [email, setEmail] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(signIn);
    }

    function handleForgotPassword() {
        console.log('I forgot my password.');
        setForgot(true);
    }

    const forgotPassword = () => {
        return (
            <div id='forgot-pass'>
                <h1>Forgot Password</h1>
                <label htmlFor='email'>Email:</label>
                <input
                    id='email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* <div id='btn-container'> */}
                    <Button
                        type='submit'
                        text='Send Password Recovery Email'
                        clickHandler={() => console.log(`send me my password to: ${email}`)}
                    />
                    <Button
                        type='button'
                        text='Back'
                        clickHandler={() => setForgot(false)}
                        className='alt-button'
                    />
                {/* </div> */}
            </div>
        )
    }

    if (forgot) {
        return (
            forgotPassword()
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
                className='alt-button'
            />
        </form>

    )

}

export default SignIn;