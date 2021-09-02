import { useState } from "react";
import Button from "../Button/Button";

function ForgotPassword({setForgot, errors, setErrors}){
    const [email, setEmail] = useState('');

    //need to add something that says email was sent.
    function handleRecoverPassword(){
        if(emailValid()){
            console.log(`send me my password to: ${email}`)
            setEmail('')
        }else{
            console.log('invalid')
        }
    }
    // simple valid email check -- should change to fetch to back end instead of regex later
    function emailValid(){
        if(/\S+@\S+\.\S+/g.test(email)){
            setErrors('')
            return true
        }else{
            setErrors('Email is not valid!')
        }
        return false
    }

    return (
        <div id='forgot-pass'>
            <h1>Recover Password</h1>
            <label htmlFor='email'>Email:</label>
            <input
                id='email'
                type='email'
                className={errors.length > 0 ? 'error-input' : undefined}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.length > 0 && 
                <span className='error-msg'>
                    <i className="fas fa-exclamation-triangle" /> {errors}
                </span>
            }
                <Button
                    type='submit'
                    text='Send Password Recovery Email'
                    clickHandler={handleRecoverPassword}
                />
                <Button
                    type='button'
                    text='Back'
                    clickHandler={() => setForgot(false)}
                    className='alt-button'
                />
        </div>
    )
}

export default ForgotPassword;