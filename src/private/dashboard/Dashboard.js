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
        habit={habit}
       />
    )

    return (
        <div id='dashboard'>
            <h1 id='welcome-user'>Welcome, {user.username}.</h1>
            <div className="habits-container">
                {habits}
            </div>
            <Button
                className='button new-habit-btn'
                text='Create New Habit'
                clickHandler={()=>setShowForm(!showForm)}
            />
            {showForm && <HabitForm setShowForm={setShowForm} />}
        </div>
    )
}
