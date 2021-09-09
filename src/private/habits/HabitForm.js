import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import Button from "../../components/button/Button";

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

const Checkbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const Select = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const TextArea = ({label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error-msg" ><i className="fas fa-exclamation-triangle" /> {meta.error}</div>
            ) : null}
        </>
    );
};

export default function HabitForm({formPurpose = "New"}) {

    function handleSubmit(values) {
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
            .then(r => r.json())
            .then(user => console.log(user))
    }

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    icon: '',
                    perodicity: '',
                    goal: 0,
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
                    private: Yup.boolean()
                        .required('Required'),
                    archived: Yup.boolean()
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
                    />
                    <TextInput
                        label="I want to do this habit"
                        name="goal"
                        type="number"
                    />
                    <Select label='times a' name='periodicity'>
                        <option value={null}>Select Periodicity</option>
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                    </Select>
                    <Checkbox name='private'>
                        Private Habit?
                    </Checkbox>
                    <Checkbox name='archive'>
                        Archive This Habit
                    </Checkbox>
                    <Button
                        type='submit'
                        text='Save Habit'
                        clickHandler={() => undefined}
                    />
                </Form>
            </Formik>
        </div>
    )
}
