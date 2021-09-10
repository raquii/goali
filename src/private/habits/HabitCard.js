import { useState } from 'react';
import Toggle from 'react-toggle';
import './HabitCard.css';
import HabitForm from './HabitForm';


export default function HabitCard({habit}) {
    const [showForm, setShowForm] = useState(false);

    const { id,
        name,
        description,
        periodicity,
        frequency,
        private_habit,
        archived,
        total_times} = habit;

    return (
        <>
        {showForm && <HabitForm setShowForm={setShowForm} habit={habit} formPurpose='Edit'/>}
        <div className='habit-card' id={id}>
            <h2 className='habit-name'>{name}</h2>
            <p className='habit-description'>{description}</p>
            <h3 className='habit-count'>{total_times} times</h3>
            
            <p className='habit-frequency'>My goal is to {name.toLowerCase()} {frequency} {frequency > 1 ? "times" : "time"} a {periodicity}.</p>
            <div className='habit-button-container'>
                <button type='button' className='habit-button' onClick={() => setShowForm(true)}>
                    <i className='fas fa-edit' />
                </button>
            </div>
        </div>
        </>
    )
}
