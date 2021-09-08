import './Sidebar.css'
import { useState } from "react"
import { NavLink, useHistory } from 'react-router-dom';
import { useLogoutMutation } from '../../features/api';

import Button from "../../components/button/Button";
import Alert from "../alert/Alert";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const [displayConfirm, setDisplayConfirm] = useState(false);

    const history = useHistory();

    const [logout] = useLogoutMutation();

    async function signOut() {
        try {
            await logout()
            setDisplayConfirm(false)
            history.push("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {displayConfirm &&
                <Alert
                    message="Are you sure you want to sign out?"
                    confirmHandler={signOut}
                    cancelHandler={() => setDisplayConfirm(false)}
                />
            }
            <nav id='sidebar' className={open ? 'responsive' : ''}>
                <ul id='ul-side'>
                    <button className="side-icon" onClick={() => setOpen(!open)}>
                        {open ? <i className='fa fa-close' /> : <i className="fa fa-bars" />}
                    </button>
                    <li className='li-side' id='home-li'>
                        <NavLink to="/dashboard" className='side-link'>Home</NavLink>
                    </li>
                    <li className='li-side'>
                        <NavLink to="/profile" className='side-link'>Profile</NavLink>
                    </li>
                    <li className='li-side'>
                        <NavLink to="/friends" className='side-link'>Friends</NavLink>
                    </li>
                    <li className='li-side'>
                        <NavLink to="/messages" className='side-link'>Messages</NavLink>
                    </li>
                    <li className='li-side'>
                        <NavLink to="/settings" className='side-link'>Settings</NavLink>
                    </li>
                        <Button
                            className='sign-out-btn button'
                            clickHandler={() => setDisplayConfirm(true)}
                            text='Sign Out'
                            type='button'
                        />

                </ul>
            </nav >
        </>
    )
}
