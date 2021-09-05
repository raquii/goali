import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import Button from "../button/Button";

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error-msg" ><i className="fas fa-exclamation-triangle" /> {meta.error}</div>
            ) : null}
        </>
    );
};

function SignUp() {

    function handleSignUp(values){
        fetch('/signup',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
        .then(r=>r.json())
        .then(user=>console.log(user))
    }

    return (
        <>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    password_confirmation: '',
                    name: '',
                    email: '',
                    birthday: '',
                }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .required('Required')
                        .min(5, "Must be 5-30 characters in length.")
                        .max(30, "Must be 5-30 characters in length."),
                    password: Yup.string()
                        .required('Required')
                        .min(7, "Must be between 7-20 characters.")
                        .max(20, "Must be between 7-20 characters.")
                        .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20}/, 'Must contain an upper and lowercase character, a number, and a special character'),
                    password_confirmation: Yup.string()
                        .required('Required')
                        .test('match-password', 'Passwords must match.', (value, context) => value === context.parent.password),
                    name: Yup.string()
                        .required('Required')
                        .min(5, "Must be 5-30 characters in length.")
                        .max(30, "Must be 5-30 characters in length."),
                    email: Yup.string()
                        .required('Required')
                        .email("Invalid email address."),
                    birthday: Yup.date()
                        .required('Required'),
                })}
                onSubmit={values => {handleSignUp(values)}}
            >
                <Form>
                <h1>Sign Up</h1>
                    <TextInput
                        label="Username"
                        name="username"
                        type="text"
                    />
                    <TextInput
                        label="Password"
                        name="password"
                        type="password"
                    />
                    <TextInput
                        label="Password Confirmation"
                        name="password_confirmation"
                        type="password"
                    />
                    <TextInput
                        label="Your Full Name"
                        name="name"
                        type="text"
                    />
                    <TextInput
                        label="Email"
                        name="email"
                        type="email"
                    />
                    <TextInput
                        label="Birthday"
                        name="birthday"
                        type="date"
                    />
                    <Button
                        type='submit'
                        text='Sign Up'
                        clickHandler={() => undefined}
                    />
                </Form>
            </Formik>
        </>
    )

}

export default SignUp;