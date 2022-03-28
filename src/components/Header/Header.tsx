import React from 'react';
import classes from './Header.module.css'

type HeaderPropsType = {
    headerValue: string
}

const Header = (props: HeaderPropsType) => {
    return (
        <div className={classes.AppHeader}>
            <img className={classes.logo}
                 src="https://yt3.ggpht.com/ytc/AAUvwngdw4sXdA6kUYDDZZi5df9azFXxNwyV7FBbNcGHSw=s900-c-k-c0x00ffffff-no-rj"
                 alt="logo"/>
            <header>
                {props.headerValue}
            </header>
        </div>
    );
};

export default Header;