import React from "react";
import {addPostActionCreator, updateNewPostText} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    };
    let onPostChange = (text) => {
        debugger
        props.store.dispatch(updateNewPostText(text));
    }

    return <MyPosts addPost={addPost} onPostChange={onPostChange} postData={props.postData} />
        ;
}

export default MyPostsContainer;
