import React from 'react';
import classes from './Navbar.module.css';
import NavbarItem from "./NavBarComponents/NavbarItem";

const Navbar = () => {
    return (
        <div className='Left-bar'>
            <nav className={classes.Navbar}>

                <NavbarItem item={'Profile'} />
                <NavbarItem item={'Dialogs'} />
                <NavbarItem item={'News'} />
                <NavbarItem item={'Music'} />
                <NavbarItem item={'Settings'} />

            </nav>

        </div>
    );
};

export default Navbar;

