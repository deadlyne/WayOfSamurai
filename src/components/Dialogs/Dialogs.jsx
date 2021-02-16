import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Max'},
        {id: 2, name: 'Vlada'},
        {id: 3, name: 'Olga'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Oleg'}
    ]
    

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map (m => <Message message={m.message}/>);

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogsElements}
                   </div>
        <div className={s.messages}>
            { messagesElements }
        </div>
    </div>
}

export default Dialogs;