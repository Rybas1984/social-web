import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React from "react";
import {sendMessageCreator, updateNewMessageBody} from "../../Redux/dialogs-reduser";

function Dialogs(props) {
    let state = props.store.getState().dialogsPage;


    let newMessageElement = React.createRef(null);
    let addMassage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    };
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
    let body = e.target.value;
        props.store.dispatch(updateNewMessageBody(body))
    }

    let dialogElements = state.dialogData.map(d => <DialogItem id={d.id} name={d.name} avaDialog={d.avaDialog}/>);
    let messageElements = state.messageData.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    return (

        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}

            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} placeholder='Enter your message' value={newMessageBody}></textarea></div>
                    <div> <button onClick={onSendMessageClick}>Send</button> </div>
                </div>
            </div>


        </div>

    );
}

export default Dialogs;
