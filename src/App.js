import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MovieTrailerPage from "./pages/MovieTrailerPage";
import Overview from "./pages/Overview";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Overview />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/home" element={<Home />} />
					<Route path="/overview" element={<Overview />} />
					<Route path="/details/:id" element={<MovieDetailsPage />} />
					<Route path="/trailer" element={<MovieTrailerPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
