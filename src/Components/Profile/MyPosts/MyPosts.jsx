import s from './MyPosts.module.css';
import Post from "../Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostText} from "../../../Redux/profile-reducer";


const MyPosts = (props) => {
    debugger
    let state = props.posts;
    let postElements = state.map(p => <Post name={p.message} like={p.like}/>);

    let newPostElement = React.createRef(null);
    let addPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        debugger
        props.onPostChange(text);
    }

    return <div className={s.myPosts}>
        <div className={s.newPost}><h3> My Posts</h3>
            <p><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></p>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
        ;
}

export default MyPosts;
