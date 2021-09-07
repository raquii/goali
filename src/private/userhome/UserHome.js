export default function UserHome({currentUser}) {
    return (
        <div id='user-home'>
            <h1>Welcome, {currentUser.username}.</h1>
        </div>
    )
}
