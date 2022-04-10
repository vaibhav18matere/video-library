import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  Playlist,
  PlaylistFolder,
} from "./frontend/pages";
import { PageContainer } from "./frontend/components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route exact path="/" element={<PageContainer page={<Home />} />} />
        <Route path="/playlist/:playlistId" element={<PlaylistFolder />} />
      </Routes>
    </div>
  );
}

export default App;
