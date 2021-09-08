import './NavBar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open);

    return (
        <nav id='navbar' className={ open ? 'responsive' : ''}>
            <div id='home-nav'>
                <NavLink exact to="/home" className='link' id="logo"> ✓ </NavLink>
            </div>
            <ul id='ul-nav'>
                <button className="icon link" onClick={handleClick}>
                    { open ? <i className='fa fa-close'/> : <i className="fa fa-bars"/>}
                </button>
                <li className='li-nav'>
                    <NavLink to="/about" className='link'>About</NavLink>
                </li>
                <li className='li-nav'>
                    <NavLink to="/signup" className='link'>Sign Up</NavLink>
                </li>
                <li className='li-nav'>
                    <NavLink to="/signin" className='link'>Sign In</NavLink>
                </li>
            </ul>
        </nav >
    )
}

export default NavBar;