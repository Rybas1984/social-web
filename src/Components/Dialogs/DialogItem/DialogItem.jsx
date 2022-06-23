import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return  <div className={s.dialog}>
        <NavLink to={"/dialogs/" + props.id}>
            <img className={s.avaDialog} src={props.avaDialog} />
            {props.name}</NavLink>
    </div>
}

export default DialogItem;
