import { Formik, Form, useField } from "formik";
import { useUpdateHabitMutation, useNewHabitMutation } from "../../features/api";
import * as Yup from "yup";
import Toggle from "react-toggle";

import './HabitForm.css'
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

// custom checkbox input for Formik
const Checkbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div className='checkbox'>
            <label className="checkbox-input">
                {children}
            </label>
            <Toggle {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error-msg"><i className="fas fa-exclamation-triangle" /> {meta.error}</div>
            ) : null}
        </div>
    );
};
//custom select input for Formik
const Select = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name} style={{ marginRight: "5pt" }}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error-msg"><i className="fas fa-exclamation-triangle" /> {meta.error}</div>
            ) : null}
        </div>
    );
};
//custom text area for Formik
const TextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea rows={3} cols={27} className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error-msg" ><i className="fas fa-exclamation-triangle" /> {meta.error}</div>
            ) : null}
        </>
    );
};

export default function HabitForm({ formPurpose = "New", habit, setShowForm }) {
    const [updateHabit] = useUpdateHabitMutation();
    const [newHabit] = useNewHabitMutation();

   async function handleSubmit(values) {
        try {
            formPurpose === "New" ?
                await newHabit(values).unwrap()
                :
                await updateHabit(values).unwrap()
            setShowForm(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='habit-form'>
            <Formik
                initialValues={habit ? {
                    id: habit.id,
                    name: habit.name,
                    description: habit.description,
                    icon: '',
                    periodicity: habit.periodicity,
                    goal: habit.frequency,
                    private: habit.private_habit,
                    archived: habit.archived,
                } : {
                    name: '',
                    description: '',
                    icon: '',
                    periodicity: '',
                    goal: 1,
                    private: true,
                    archived: false,
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Required')
                        .min(2, "Must be 2-60 characters in length.")
                        .max(60, "Must be 2-60 characters in length."),
                    description: Yup.string()
                        .optional(),
                    icon: Yup.string()
                        .optional(),
                    periodicity: Yup.string()
                        .required('Required'),
                    goal: Yup.number()
                        .required('Required'),
                    private: Yup.string()
                        .required('Required'),
                    archived: Yup.string()
                        .required('Required'),
                })}
                onSubmit={values => { handleSubmit(values) }}
            >
                <Form>
                    <h1>{formPurpose} Habit</h1>
                    <TextInput
                        label="Name"
                        name="name"
                        type="text"
                    />
                    <TextArea
                        label="Description"
                        name="description"
                    /><span id='span'>
                        <TextInput
                            className='form-goal'
                            label="I want to do this habit"
                            name="goal"
                            type="number"
                        />
                        <Select id='form-select'
                            label='times a' name='periodicity'>
                            <option value={null}>Select...</option>
                            <option value="day">day</option>
                            <option value="week">week</option>
                            <option value="month">month</option>
                        </Select></span>
                    <Checkbox name='private'>
                        Private Habit:
                    </Checkbox>
                    {formPurpose !== "New" && <Checkbox name='archive'>
                        Archive Habit
                    </Checkbox>}
                    <div id='form-button-container'>
                    <Button
                        type='submit'
                        text='Save Habit'
                        clickHandler={() => undefined}
                    />
                    <Button
                        type='button'
                        text='Cancel'
                        className='cancel button'
                        clickHandler={() => setShowForm(false)}
                    />
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
