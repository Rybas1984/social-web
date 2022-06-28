import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return <div className={s.profile}>
           <ProfileInfo />
            <MyPostsContainer store={props.store}
                postData={props.profilePage.postData}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
    </div>;
}

export default Profile;
