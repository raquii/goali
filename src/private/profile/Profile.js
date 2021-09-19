import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router';

import './Profile.css';
import Button from '../../components/button/Button';
import ProfileForm from './ProfileForm';
import { useEffect } from 'react';


export default function Profile() {
    const [showForm, setShowForm] = useState(false)
    const [user, setUser] = useState({
        name: "",
        username: "",
        profile: {
            location: "",
            bio: ""
        },
        habits: []
    })
    const currentUser = useSelector(state => state.user.username)

    const { username } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/users/${username}`, {
            credentials: 'include'
        })
            .then(r => r.json())
            .then(data => setUser(data))
    }, [username])

    const additionalProfile = () => {
        if (user.not_friends) {
            return (
                <Button
                    text={`Send Friend Request`}
                    clickHandler={console.log('add friend')}
                />
            )
        } else {
            return (
                <div id='habit-list'>
                    <h3 style={{ color: 'var(--dark-gold)' }}> Habits:</h3>
                    {user.habits.length === 0 && <p>No habits to display.</p>}
                    {user.habits.map(habit => {
                        return (
                            <div key={habit.name}>
                                {habit.name}
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    return (
        <div id="profile-container">
            {showForm && <ProfileForm
                setShowForm={setShowForm}
                setUser={setUser}
                user={user} />}
            <Button
                type='button'
                className='profile-button profile-icon'
                text={<i className='fas fa-user-circle fa-8x' />}
            />
            {username === currentUser &&
                <Button
                    className='edit-button profile-edit'
                    clickHandler={() => setShowForm(true)}
                    text={<i className='fas fa-edit' />}
                />
            }
            <table>
                <tbody>
                    <tr>
                        <th>
                            Username:
                        </th>
                        <td>
                            {user.username}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Name:
                        </th>
                        <td>
                            {user.name}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Location:
                        </th>
                        <td>
                            {user.profile.location}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Bio:
                        </th>
                        <td>
                            {user.profile.bio}
                        </td>
                    </tr>
                </tbody>
            </table>
            {additionalProfile()}
        </div>
    )
}
