import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Playlist } from "./frontend/pages";
import { PageContainer } from "./frontend/components";
// import { PrivateRoute } from "./frontend/protectedRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route exact path="/" element={<PageContainer children={<Home />} />} />

        {/* <Route
					path="/playlist/:playlistId"
					element={
						<PrivateRoute>
							<PageContainer page={<PlaylistFolder />} />
						</PrivateRoute>
					}
				/> */}
      </Routes>
    </div>
  );
}

export default App;
