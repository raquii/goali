import './Friends.css'
import { useState, useEffect } from "react"
import FriendCard from './FriendCard'

export default function Friends() {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/friendships', {
            credentials: 'include'
        })
            .then(r => r.json())
            .then(data => setFriends(data))
    }, [])


    const friendCards = friends.map(friend => <FriendCard
        key={friend.username}
        name={friend.name}
        username={friend.username}
    />
    )

    const requests = () => {
        return (
            <div className='request-card'>

            </div>
        )
    }

    return (
        <div id="friends-page">
            <div id='friend-card-container'>
                {friendCards}
            </div>
            <div>
                <h3>Find Friends:</h3>
                <input type='search'></input>
            </div>

        </div>
    )
}
