import {combineReducers, legacy_createStore as createStore} from "redux"
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./navBar-reducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: sidebarReducer,
});

let store = createStore(redusers);
export default store;