import Toggle from 'react-toggle';
import './HabitCard.css';

export default function HabitCard({
    id,
    name,
    description,
    periodicity,
    frequency,
    private_habit,
    archived,
    total_times
}) {

    function handleUpdate(e) {
        const privacyUpdate = {
            "private": e.target.checked
        }
        console.log(privacyUpdate)
        // fetch(`/habits/${id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(privacyUpdate)
        // })
        //     .then(r => r.json())
        //     .then(habit => console.log(habit))

    }


    return (
        <div className='habit-card' id={id}>
            <h2 className='habit-name'>{name}</h2>
            <p className='habit-description'>{description}</p>
            <h3 className='habit-count'>{total_times} times</h3>
            
            <p className='habit-frequency'>My goal is to {name.toLowerCase()} {frequency} {frequency > 1 ? "times" : "time"} a {periodicity}.</p>
            <div className='habit-button-container'>
                <button type='button' className='habit-button' onClick={() => console.log('I want to edit this habit')}>
                    <i className='fas fa-edit' />
                </button>
                
                <label htmlFor={id+name}>Private Habit: </label>
                    <Toggle
                        id={id+name}
                        defaultChecked={private_habit}
                        icons={false}
                        onChange={handleUpdate} 
                    />
            </div>
        </div>
    )
}
