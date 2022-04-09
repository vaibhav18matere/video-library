import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
	Home,
	Login,
	Signup,
} from "./frontend/pages";
import { PageContainer } from "./frontend/components";
// import { PrivateRoute } from "./frontend/protectedRoute/PrivateRoute";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route exact path="/" element={<PageContainer page={<Home />} />} />
				{/* <Route
					path="/playList"
					element={
						<PrivateRoute>
							<PageContainer page={<Playlist />} />
						</PrivateRoute>
					}
				/> */}
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
