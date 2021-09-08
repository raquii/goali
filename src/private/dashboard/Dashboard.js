import { useSelector } from "react-redux"

export default function Dashboard() {
    const user = useSelector(state=> state.user)

    return (
        <div id='dashboard'>
            <h1>Welcome, {user.username}.</h1>
        </div>
    )
}
