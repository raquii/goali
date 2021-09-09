import './Friends.css'
import { useState, useEffect } from "react"

export default function Friends() {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/friendships', {
            credentials: 'include'
        })
            .then(r => r.json())
            .then(data => setFriends(data))
    }, [])


    const friendCards = friends.map(friend => {
        return (
            <div key={friend.username} className='friend-card'>
                <button type='button' className='friend-button' onClick={() => console.log('I want to edit this habit')}>
                        <i className='fas fa-user-circle fa-8x' />
                </button>
                <h2>{friend.name} • <em>{friend.username}</em></h2>
                <div className='friend-button-container'>
                    <button type='button' className='friend-button' onClick={() => console.log('I want to edit this habit')}>
                        <i className='fas fa-envelope' />
                    </button>
                    <button type='button' className='friend-button' onClick={() => console.log('I want to edit this habit')}>
                        <i className='fas fa-user-slash' />
                    </button>
                </div>
            </div>
        )
    })

    const requests = ()=> {
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
