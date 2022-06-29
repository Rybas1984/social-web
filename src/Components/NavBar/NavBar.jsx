import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import React from "react";
import AddFriend from "./addFriend/AddFriend";


function NavBar(props) {
    let friendElements = props.state.map (n => <AddFriend imgFriend={n.imgFriend} key={n.id} nameFriend={n.nameFriend}/>);

    return (
        <div className={s.navBar}>
            <div>
                <NavLink to="/profile" className={navData => navData.isActive ? s.active : ''}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : ''}>Massege</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={navData => navData.isActive ? s.active : ''}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={navData => navData.isActive ? s.active : ''}>Music</NavLink>
            </div>
            <div className={s.setting}>
                <NavLink to="/settings" className={navData => navData.isActive ? s.active : ''}>Settings</NavLink>
            </div>

            <div className={s.friends}>
                <h2>Friends</h2>
                <div className={s.friendsItems}>
                    {friendElements}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
