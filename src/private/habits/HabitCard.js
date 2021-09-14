import { useState } from 'react';
import dayjs from 'dayjs';

import Button from '../../components/button/Button';
import './HabitCard.css';
import HabitForm from './HabitForm';


export default function HabitCard({ habit }) {
    const [showForm, setShowForm] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const {
        id,
        name,
        description,
        periodicity,
        frequency,
        private_habit,
        archived,
        total_times
    } = habit;

    const habitDetails = () => {
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
            </>
        )
    }
    return (
        <>
            {showForm && <HabitForm setShowForm={setShowForm} habit={habit} formPurpose='Edit' />}
            <div className='habit-card' id={id}>
                <h2 className='habit-name'>{name} {private_habit && <i title="Private habit" className="fas fa-lock"/>}</h2>
                {showDetails && habitDetails()}
                <Button
                    className='show-details'
                    clickHandler={() => setShowDetails(!showDetails)}
                    text={showDetails ? <i className="fas fa-chevron-up" /> : <i className='fas fa-ellipsis-h' />}
                />
                <div className='habit-button-container'>
                    <span className='completed-span'>
                    <Button
                        className='completed'
                        clickHandler={() => console.log('finished')}
                        text=""
                    />
                    </span>
                    <Button
                        className='habit-button'
                        clickHandler={() => setShowForm(true)}
                        text={<i className='fas fa-edit' />}
                    />
                </div>
            </div>
        </>
    )
}
