import { useState } from "react";
import Button from "../../components/button/Button";
import ToolTip from "./ToolTip";


export default function HabitDetails({ id, name, frequency, periodicity, total_times, description, setShowForm }) {

    const [showEditMenu, setShowEditMenu] = useState(false);

    return (
        <>
            <p className='habit-frequency'>
                My goal is to {name.toLowerCase()} {frequency > 1 ? `${frequency} times` : `once`} a {periodicity}.
            </p>
            <h3 className='habit-count'>
                Total Times: <span className='habit-highlight'>{total_times}</span>
            </h3>
            {description.length > 0 &&
                <p className='habit-description'>
                    <strong>Description:</strong> {description}
                </p>}
            <Button
                className='edit-button'
                clickHandler={() => setShowEditMenu(!showEditMenu)}
                text={<i className='fas fa-edit' />}
            />
            {showEditMenu && <ToolTip id={id} habitName={name} setShowForm={setShowForm} />}
        </>
    )
}
