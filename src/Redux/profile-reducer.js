const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
    postData: [
        {id: 1, message: "Hi", like: 25},
        {id: 2, message: "Hello", like: 20},
        {id: 3, message: "By", like: 2},
        {id: 4, message: "Yo", like: 5},
        {id: 5, message: "Funny", like: 1},
        {id: 6, message: "Help", like: 100},
    ],
    newPostText: "11",
};

const  profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
        let newPost = {
            id: 8,
            message: state.newPostText,
            like: 0};
        state.postData.push(newPost);
        state.newPostText ='';
        return state;}
        case UPDATE_NEW_POST_TEXT: {
        state.newPostText = action.newText;
            return state;}
        default:  return state;
    }



}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostText = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })
export  default  profileReducer;