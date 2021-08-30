import './NavBar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open);
    const closeMobile = () => setOpen(false);

    return (
        <nav id='navbar' className={ open ? 'responsive' : ''}>
            <div id='home-nav'>
                <NavLink exact to="/" className='link'>Home</NavLink>
            </div>
            <ul id='ul-nav'>
                <a href="#" className="icon link" onClick={handleClick}>
                    { open ? <i className='fa fa-close'/> : <i className="fa fa-bars"/>}
                </a>
                <li className='li-nav'>
                    <NavLink exact to="/" className='link'>Home</NavLink>
                </li>
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