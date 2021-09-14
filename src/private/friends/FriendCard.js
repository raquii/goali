import { useState } from "react";

import Button from "../../components/button/Button";
import Alert from "../alert/Alert";

export default function FriendCard({ id, username, name, removeFriend }) {
    const [showAlert, setShowAlert] = useState(false);

    function deleteFriend(id){
        fetch(`http://localhost:3000/friendships`, {
            method: 'DELETE',
            credentials:'include',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({friend_b_id: id})
        })
        .then(r=>r.json())
        .then(data=>{
            setShowAlert(false)
            removeFriend(friends=>friends.filter(f => f.id !== id))
        })
    }

    return (
        <>
            {showAlert && <Alert
                message={`Are you sure you'd like to remove ${name} as a friend?`}
                confirmHandler={() => deleteFriend(id)}
                cancelHandler={()=>setShowAlert(false)}
            />
            }
            <div key={username} className='friend-card'>
                <Button
                    type='button'
                    className='friend-button'
                    clickHandler={() => console.log('I want to edit this habit')}
                    text={<i className='fas fa-user-circle fa-8x' />}
                />
                <h2>{name} • <em>{username}</em></h2>
                <div className='friend-button-container'>
                    <Button
                        type='button'
                        className='friend-button'
                        clickHandler={() => console.log('I want to edit this habit')}
                        text={<i className='fas fa-envelope' />}
                    />
                    <Button
                        type='button'
                        className='friend-button delete'
                        clickHandler={()=>setShowAlert(true)}
                        text={<i className='fas fa-user-slash' />}
                    />
                </div>
            </div>
        </>
    )
}
