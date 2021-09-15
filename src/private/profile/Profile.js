import { useSelector } from 'react-redux';
import { useState } from 'react';

import './Profile.css';
import Button from '../../components/button/Button';
import ProfileForm from './ProfileForm';


export default function Profile({
    username,
    name,
    bio,
    location,
    profile_picture,
}) {
    const [showForm, setShowForm] = useState(false)
    const currentUser = useSelector(state => state.user.username)

    return (
        <div id="profile-container">
            {showForm && <ProfileForm setShowForm={setShowForm} />}
            <Button
                type='button'
                className='profile-button profile-icon'
                clickHandler={() => console.log('I want see their profile')}
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
                            {username}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Name:
                        </th>
                        <td>
                            {name}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Location:
                        </th>
                        <td>
                            {location}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Bio:
                        </th>
                        <td>
                            {bio}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
