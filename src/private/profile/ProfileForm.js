import { Formik, Form, useField } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";

import { useUpdateProfileMutation } from "../../features/api";
import Button from "../../components/button/Button";


// custom text input for Formik
const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label style={{ marginRight: "5pt" }} htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error-msg" ><i className="fas fa-exclamation-triangle" /> {meta.error}</div>
            ) : null}
        </>
    );
};

export default function ProfileForm({ setShowForm, setUser, user }) {
    const [updateProfile] = useUpdateProfileMutation();

    const profile = useSelector(state => state.user.profile)

    async function handleSubmit(values) {
        try {
            await updateProfile(values).unwrap()
            setShowForm(false)
            setUser({ ...user, profile: values })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='profile-form'>
            <Formik
                initialValues={{
                    location: profile.location,
                    bio: profile.bio,
                    id: profile.id
                }}
                validationSchema={Yup.object({
                    location: Yup.string()
                        .optional()
                        .max(60, "Must be shorter than 61 characters in length."),
                    bio: Yup.string()
                        .optional()
                        .max(200, "Must be shorter than 200 characters in length."),
                })}
                onSubmit={values => { handleSubmit(values) }}
            >
                <Form>
                    <h1>Update Profile</h1>
                    <TextInput
                        label="Location"
                        name="location"
                        type="text"
                    />
                    <TextInput
                        label="Bio"
                        name="bio"
                        type="text"
                    />
                    <Button
                        type='submit'
                        text='Save Changes'
                        clickHandler={() => undefined}
                    />
                    <Button
                        type='button'
                        text='Cancel'
                        className='cancel button'
                        clickHandler={() => setShowForm(false)}
                    />
                </Form>
            </Formik>
        </div>
    )
}
