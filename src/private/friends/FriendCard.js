import { useState } from "react";

import Button from "../../components/button/Button";
import Alert from "../alert/Alert";

export default function FriendCard({ id, friendId, username, name, removeFriend }) {
    const [showAlert, setShowAlert] = useState(false);

    function deleteFriend(id) {
        fetch(`http://localhost:3000/friendships/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ friend_id: friendId })
        })
            .then(r => r.json())
            .then(() => {
                setShowAlert(false)
                removeFriend(friends => friends.filter(f => f.id !== id))
            })
    }

    return (
        <>
            {showAlert && <Alert
                message={`Are you sure you'd like to remove ${name} as a friend?`}
                confirmHandler={() => deleteFriend(id)}
                cancelHandler={() => setShowAlert(false)}
            />
            }
            <div key={username} className='friend-card'>
                <Button
                    type='button'
                    className='profile-button friend-icon'
                    clickHandler={() => console.log('I want see their profile')}
                    text={<i className='fas fa-user-circle fa-8x' />}
                />
                <h2>
                    {name}
                    <br />
                
                    <span className='friend-username'>{username}</span>
                </h2>
                <div className='friend-button-container'>
                    <Button
                        type='button'
                        className='friend-button message'
                        clickHandler={() => console.log('I want to message my friend')}
                        text={<i className='fas fa-envelope' />}
                    />
                    <Button
                        type='button'
                        className='friend-button delete'
                        clickHandler={() => setShowAlert(true)}
                        text={<i className='fas fa-user-slash' />}
                    />
                </div>
            </div>
        </>
    )
}
