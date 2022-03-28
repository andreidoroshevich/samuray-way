import React from 'react';
import classes from "../Dialogs.module.css";
import { NavLink } from 'react-router-dom';


export type DialogPropsType = {
    name: string
    id: number
}

const Dialog = (props: DialogPropsType) => {
    return (
        <div className={classes.dialog}><NavLink activeClassName={classes.active} to={`/Dialogs/${props.id}`}> {props.name}</NavLink></div>

    );
};

export default Dialog;