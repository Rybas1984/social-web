import "./App.css";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import NavBar from "./Components/NavBar/NavBar";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsoContainer";



function App(props) {
  return (

      <div className="App">
        <Header />
        <NavBar state={props.state.navBar}/>
        <div className="app_Content">
          <Routes>
            <Route path="/profile" element={<Profile store={props.store} profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path="/dialogs" element={<DialogsContainer store={props.store}  />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>

  );
}

export default App;
