import Toggle from 'react-toggle';
import './HabitCard.css';

export default function HabitCard({
    id,
    name,
    description,
    periodicity,
    goal,
    private_habit,
    archived,
    count_times_logged
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
            <h3 className='habit-count'>{count_times_logged} times</h3>
            
            <p className='habit-goal'>Your goal is to {name.toLowerCase()} {goal} {goal > 1 ? "times" : "time"} a {periodicity}.</p>
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
