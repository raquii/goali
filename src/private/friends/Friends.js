import './Friends.css'
import { useState, useEffect } from "react"
import FriendCard from './FriendCard'
import RequestCard from './RequestCard';

export default function Friends() {
    const [friends, setFriends] = useState([]);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/friendships', {
            credentials: 'include'
        })
            .then(r => r.json())
            .then(data => setFriends(data))

        fetch('http://localhost:3000/friend_requests', {
            credentials: 'include'
        })
            .then(r => r.json())
            .then(data => setRequests(data))
    }, []);
    
    const friendCards = friends.map(friend => <FriendCard
        key={friend.username}
        id={friend.id}
        name={friend.name}
        username={friend.username}
        removeFriend={setFriends}
    />
    );

    const requestCards = requests.map(request => <RequestCard
        key={request.username}
        id={request.id}
        name={request.name}
        username={request.username}
        addFriend={setFriends}
        removeRequest={setRequests}
    />)

    return (
        <div id="friends-page">
            <div id='friend-card-container'>
                {friendCards}
            </div>
            <div id="friend-side-bar">
                <h3>Find Friends:</h3>
                <input type='search'></input>
                <h3>Pending Requests</h3>
                {requestCards}
            </div>

        </div>
    )
}
