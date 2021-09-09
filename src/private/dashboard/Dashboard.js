import { useSelector } from "react-redux"
import HabitCard from "../habits/HabitCard"
import HabitForm from "../habits/HabitForm"

export default function Dashboard() {
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
        </div>
    )
}
