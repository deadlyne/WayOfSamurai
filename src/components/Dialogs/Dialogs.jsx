import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialogs}>{props.message}</div>;
}

const Dialogs = (props) => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name="Max" id="1"/>
            <DialogItem name="Vlada" id="2"/>
            <DialogItem name="Olga" id="3"/>
            <DialogItem name="Valera" id="4"/>
            <DialogItem name="Viktor" id="5"/>
            <DialogItem name="Oleg" id="6"/>
        </div>
        <div className={s.messages}>
            <Message message="Hi!"/>
            <Message message="How are you?"/>
            <Message message="Yo!"/>
            <Message message="Yo!"/>
            <Message message="Push!"/>
            <Message message="Push!"/>
        </div>
    </div>
}

export default Dialogs;