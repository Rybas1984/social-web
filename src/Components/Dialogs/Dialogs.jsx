import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React from "react";

function Dialogs(props) {
    let state = props.dialogsPage;

    let dialogElements = state.dialogData.map(d => <DialogItem id={d.id} key={d.id} name={d.name} avaDialog={d.avaDialog}/>);
    let messageElements = state.messageData.map(m => <Message key={m.id} message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e) => {

        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}

            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} placeholder='Enter your message'
                                   value={newMessageBody}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default Dialogs;
