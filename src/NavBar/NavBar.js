import './NavBar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';

function NavBar({user, onLogout}) {
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open);

    function logout(){
        fetch('/logout',{
            method: 'DELETE',
        }).then(()=>onLogout(null))
    }

    return (
        <nav id='navbar' className={ open ? 'responsive' : ''}>
            <div id='home-nav'>
                <NavLink exact to="/" className='link' id="logo">✓ goalie</NavLink>
            </div>
            <ul id='ul-nav'>
                <button className="icon link" onClick={handleClick}>
                    { open ? <i className='fa fa-close'/> : <i className="fa fa-bars"/>}
                </button>
                <li className='li-nav'>
                    <NavLink to="/about" className='link'>About</NavLink>
                </li>
                <li className='li-nav'>
                    {!user? <NavLink to="/signup" className='link'>Sign Up</NavLink> : <Button text='Sign Out' className='link' clickHandler={logout}/>}
                </li>
                <li className='li-nav'>
                    {!user&&<NavLink to="/signin" className='link'>Sign In</NavLink>}
                </li>
            </ul>
        </nav >
    )
}

export default NavBar;