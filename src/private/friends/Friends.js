import './Friends.css'
import { useState, useEffect } from "react"
import FriendCard from './FriendCard'
import RequestCard from './RequestCard';
import Button from '../../components/button/Button';

export default function Friends() {
    const [friends, setFriends] = useState([]);
    const [requests, setRequests] = useState([]);
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

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

    function findMyFriends() {
        if (search.length > 3) {
            fetch(`http://localhost:3000/users?search=${search}`, {
                credentials: 'include'
            })
                .then(r => r.json())
                .then(data => setResults(data))
        } else {
            console.log('too short of a search')
        }
    }

    const friendCards = friends.map(friend => <FriendCard
        key={friend.friend.username}
        id={friend.id}
        friendId={friend.friend.id}
        name={friend.friend.name}
        username={friend.friend.username}
        removeFriend={setFriends}
    />
    );

    const requestCards = requests.map(request => <RequestCard
        key={request.requestor.username}
        id={request.id}
        friendId={request.requestor.id}
        name={request.requestor.name}
        username={request.requestor.username}
        addFriend={setFriends}
        removeRequest={setRequests}
    />)

    if(results.length>0){
       
        const users = results.map(user=> <RequestCard 
            key={user.id}
            id={user.id}
            friendId={user.id}
            name={user.name}
            username={user.username}
            addFriend={setRequests}
            removeRequest={()=>console.log('jsfasga')}
        />)
        
        return (
            <>
            {users}
            </>
        )
    }
    return (
        <div id="friends-page">
            <div id='friend-search-bar'>
                <label id='search-label' htmlFor='friend-search'>Find Friends</label>
                <input
                    id='friend-search'
                    type='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button
                    clickHandler={findMyFriends}
                    text={<i className='fa fa-search' />}
                    className="search-toggle"
                />
            </div>

            <div id='friend-card-container'>
                <h1>Friends</h1>
                {friendCards}
            </div>
            <div id="friend-side-bar">
                <div id='requests-header'>
                    <h4>Pending Requests</h4>
                    {requests.length > 0 &&
                        <div className='request-alert'>
                            {requests.length}
                        </div>
                    }

                </div>

                {requestCards}
            </div>
        </div>
    )
}
