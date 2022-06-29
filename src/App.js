import "./App.css";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsoContainer";
import NavBarContainer from "./Components/NavBar/NavBarContainer";


function App(props) {
    return (

        <div className="App">
            <Header/>
            <NavBarContainer />
            <div className="app_Content">
                <Routes>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/dialogs" element={<DialogsContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
