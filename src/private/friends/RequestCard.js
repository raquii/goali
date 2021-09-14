import { useState } from "react";
import { useSelector } from 'react-redux'
import Button from "../../components/button/Button";
import Alert from "../alert/Alert";

export default function RequestCard({ id, username, name, addFriend, removeRequest }) {
    const [showAlert, setShowAlert] = useState(false);

    function acceptFriend(id){
        fetch(`http://localhost:3000/friendships`, {
            method: 'POST',
            credentials:'include',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({friend_b_id: id})
        })
        .then(r=>r.json())
        .then(friend=>{
                addFriend(friends=>[...friends, friend])
                removeRequest(req=>req.filter(r => r.id !== id))
            })
    }

    return (
        <>
            {showAlert && <Alert
                message={`Cancel pending friend request with ${name}?`}
                confirmHandler={() => console.log('yeah, fuck him')}
                cancelHandler={()=>setShowAlert(false)}
            />
            }
            <div key={username} className='request-card'>
                <Button
                    type='button'
                    className='friend-button'
                    clickHandler={() => console.log('I want to edit this habit')}
                    text={<i className='fas fa-user-circle fa-5x' />}
                />
                <h4>{name} • <em>{username}</em></h4>
                <div className='request-button-container'>
                    <Button
                        type='button'
                        className='friend-button accept'
                        clickHandler={() => acceptFriend(id)}
                        text={<i className='fas fa-plus' />}
                    />
                    <Button
                        type='button'
                        className='friend-button delete'
                        clickHandler={()=>setShowAlert(true)}
                        text={<i className='fas fa-trash' />}
                    />
                </div>
            </div>
        </>
    )
}
