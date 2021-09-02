import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";

function SignUp(){
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordConfirmation: '',
        name: '',
        email: '',
        birthday: '',
        errors: {
            username:'',
            password:'',
            name:'',
            email:'',
            birthday:''
        }
    })
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }

    function handleChange(e){
        const key=e.target.id
        const value=e.target.value
        setFormData({
            ...formData,
            [key]:value
        })
    }

    function validateForm(){

    }

    return(
        <form id='sign-up-form' className='form' onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <label htmlFor='username'>Username: </label>
            <input
                id='username'
                type='text'
                className={formData.errors.username.length > 0 ? 'error-input' : undefined}
                value={formData.username}
                onChange={handleChange}
            />
            {formData.errors.username.length > 0 && 
                <span className='error-msg'>
                    <i className="fas fa-exclamation-triangle" /> {formData.errors.username}
                </span>
            }
            <label htmlFor='password'>Password: </label>
            <input
                id='password'
                type='password'
                className={formData.errors.password.length > 0 ? 'error-input' : undefined}
                value={formData.password}
                onChange={handleChange}
            />
            <label htmlFor='passwordConfirmation'>Password Confirmation: </label>
            <input
                id='passwordConfirmation'
                type='password'
                className={formData.errors.password.length > 0 ? 'error-input' : undefined}
                value={formData.passwordConfirmation}
                onChange={handleChange}
            />
            {formData.errors.password.length > 0 && 
                <span className='error-msg'>
                    <i className="fas fa-exclamation-triangle" /> {formData.errors.password}
                </span>
            }
            <label htmlFor='name'>Name: </label>
            <input
                id='name'
                type='text'
                className={formData.errors.name.length > 0 ? 'error-input' : undefined}
                value={formData.name}
                onChange={handleChange}
            />
            {formData.errors.name.length > 0 && 
                <span className='error-msg'>
                    <i className="fas fa-exclamation-triangle" /> {formData.errors.name}
                </span>
            }
            <label htmlFor='email'>Email: </label>
            <input
                id='email'
                type='email'
                className={formData.errors.email.length > 0 ? 'error-input' : undefined}
                value={formData.email}
                onChange={handleChange}
            />
            {formData.errors.email.length > 0 && 
                <span className='error-msg'>
                    <i className="fas fa-exclamation-triangle" /> {formData.errors.email}
                </span>
            }
            <label htmlFor='birthday'>Birthday: </label>
            <input
                id='birthday'
                type='date'
                className={formData.errors.birthday.length > 0 ? 'error-input' : undefined}
                value={formData.birthday}
                onChange={handleChange}
            />
            {formData.errors.birthday.length > 0 && 
                <span className='error-msg'>
                    <i className="fas fa-exclamation-triangle" /> {formData.errors.birthday}
                </span>
            }

            <Button
                type='submit'
                text='Sign Up'
                clickHandler={handleSubmit}
            />
        </form>
    )

}

export default SignUp;