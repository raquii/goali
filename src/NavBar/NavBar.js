import './NavBar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(){
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open);
    const closeMobile = () => setOpen(false);

    return(
        <Nav id='navbar'>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="">About</NavLink>
            <NavLink to="">Sign Up</NavLink>
            <NavLink to="">Sign In</NavLink>
        </Nav>
    )
}

export default NavBar;