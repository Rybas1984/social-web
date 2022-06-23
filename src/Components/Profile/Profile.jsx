import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = (props) => {
  return <div className={s.profile}>
           <ProfileInfo />
            <MyPosts postData={props.profilePage.postData}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText = {props.updateNewPostText}/>
    </div>;
}

export default Profile;
