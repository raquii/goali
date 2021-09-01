import { useState } from "react";
import Button from "../Button/Button";

function ForgotPassword({setForgot}){
    
    const [email, setEmail] = useState('');

    function handleRecoverPassword(){
        console.log(`send me my password to: ${email}`)
    }

    return (
        <div id='forgot-pass'>
            <h1>Recover Password</h1>
            <label htmlFor='email'>Email:</label>
            <input
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
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