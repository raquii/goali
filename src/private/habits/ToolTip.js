import { useState } from "react"
import { useDeleteHabitMutation } from "../../features/api";
import Alert from "../alert/Alert";



export default function ToolTip({ setShowForm, habitName, id }) {
    const [showAlert, setShowAlert] = useState(false);
    const [deleteHabit] = useDeleteHabitMutation();

    async function handleDelete() {
        const habit = { id: id }
        try {
            await deleteHabit(habit).unwrap()
            setShowForm(false)
            setShowAlert(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {showAlert &&
                <Alert
                    message={`Delete '${habitName}' from your habits?`}
                    confirmHandler={handleDelete}
                    cancelHandler={() => setShowAlert(false)}
                />
            }
            <div className='tooltip'>
                <ul>
                    <li>
                        Edit logs
                    </li>
                    <li onClick={() => setShowForm(true)}>
                        Edit habit
                    </li>
                    <li onClick={() => setShowAlert(true)}>
                        Delete habit
                    </li>
                </ul>
            </div>
        </>
    )
}
