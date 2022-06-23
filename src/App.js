import "./App.css";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import NavBar from "./Components/NavBar/NavBar";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { Route, Routes } from "react-router-dom";



function App(props) {
  return (

      <div className="App">
        <Header />
        <NavBar state={props.state.navBar}/>
        <div className="app_Content">
          <Routes>
            <Route path="/profile" element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText = {props.updateNewPostText} />} />
            <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>

  );
}

export default App;
