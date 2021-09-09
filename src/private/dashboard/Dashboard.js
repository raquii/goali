import './Dashboard.css'
import { useSelector } from "react-redux"
import Button from "../../components/button/Button"
import HabitCard from "../habits/HabitCard"
import HabitForm from "../habits/HabitForm"
import { useState } from 'react'

export default function Dashboard() {
    const [showForm, setShowForm] = useState(false)

    const user = useSelector(state => state.user)

    const habits = user.habits.map(habit => <HabitCard
        key={habit.id}
        id={habit.id}
        name={habit.name}
        description={habit.description}
        periodicity={habit.periodicity}
        frequency={habit.frequency}
        private_habit={habit.private_habit}
        archived={habit.archived}
        total_times={habit.total_times} />
    )

    return (
        <div id='dashboard'>
            <h1>Welcome, {user.username}.</h1>
            <div className="habits-container">
                {habits}
            </div>
            <Button
                className='button new-habit-btn'
                text='Create New Habit'
                clickHandler={()=>setShowForm(!showForm)}
            />
            {showForm && <HabitForm />}
        </div>
    )
}
