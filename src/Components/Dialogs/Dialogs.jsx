import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React from "react";




function Dialogs(props) {
    let newMessageElement = React.createRef(null);
    let addMassage = () => {
        let text = newMessageElement.current.value;
        alert(text)};

    let dialogElements = props.state.dialogData.map(d => <DialogItem id={d.id} name={d.name} avaDialog={d.avaDialog}/>);
    let messageElements = props.state.messageData.map(m => <Message message={m.message}/>);
    return (

        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}

            </div>
            <div className={s.messages}>
                {messageElements}
                <p><textarea ref={newMessageElement}></textarea></p>
                <button onClick={ addMassage  }>Add post</button>
            </div>


        </div>

    );
}

export default Dialogs;
