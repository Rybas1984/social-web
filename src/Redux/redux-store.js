import {combineReducers, legacy_createStore as createStore} from "redux"
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./navBar-reducer";
import usersReducer from "./users-reducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: sidebarReducer,
    usersPage: usersReducer,
});

let store = createStore(redusers);
export default store;