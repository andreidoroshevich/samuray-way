import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

// type HeaderPropsType = {
//     headerValue: string
// }

const Header = ({...props}) => {
    return (
        <div className={classes.AppHeader}>
            <div className={classes.logoContainer}>
                <img className={classes.logo}
                     src="https://yt3.ggpht.com/ytc/AAUvwngdw4sXdA6kUYDDZZi5df9azFXxNwyV7FBbNcGHSw=s900-c-k-c0x00ffffff-no-rj"
                     alt="logo"/>

                <header>
                    {props.headerValue}
                </header>

            </div>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>

    );
};

export default Header;