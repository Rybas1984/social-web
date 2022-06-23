import s from './AddFriend.module.css';


const AddFriend = (props) => {
    return <div className={s.friendsItem}>
        <img className={s.avaFriend} src={props.imgFriend} alt="ava"/>
        <p className={s.friendName}>{props.nameFriend}</p>
    </div>
}

export default AddFriend;
