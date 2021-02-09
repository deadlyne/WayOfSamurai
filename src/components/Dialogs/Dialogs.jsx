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

    let dialogsData = [
        {id: 1, name: 'Max'},
        {id: 2, name: 'Vlada'},
        {id: 3, name: 'Olga'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Oleg'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name={dialogsData [0].name} id={dialogsData [0].id}/>
            <DialogItem name={dialogsData [1].name} id={dialogsData [1].id}/>
        </div>
        <div className={s.messages}>
            <Message message={messagesData [0].message}/>
            <Message message={messagesData [1].message}/>
            <Message message="Yo!"/>
            <Message message="Yo!"/>
            <Message message="Yo!"/>
        </div>
    </div>
}

export default Dialogs;