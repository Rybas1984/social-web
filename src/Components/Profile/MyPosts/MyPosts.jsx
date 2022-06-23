import s from './MyPosts.module.css';
import Post from "../Post/Post";
import React from "react";


const MyPosts = (props) => {
    let postElements = props.postData.map ( p => <Post name={p.message} like={p.like}/>);

    let newPostElement = React.createRef(null);
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    };
let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
}

    return <div className={s.myPosts}>
        <div className={s.newPost}><h3> My Posts</h3>
            <p><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} /></p>
            <button onClick={ addPost  }>Add post</button>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
        ;
}

export default MyPosts;
