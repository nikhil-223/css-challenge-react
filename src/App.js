import "./App.css";
import Navbar from "./components/Navbar";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";
import Home from "./components/Home";
import { useState } from "react";
import { changestate } from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
	const [mode, setmode] = useState("green");
	const changeBlueMode = () => {
		setmode("darkblue");
		changestate();
		document.body.style.backgroundColor = "#091530";
	};
	const changeGreenMode = () => {
		setmode("darkgreen");
		changestate();
		document.body.style.backgroundColor = "#042829";
	};
	const changeRedMode = () => {
		setmode("darkred");
		changestate();
		document.body.style.backgroundColor = "#260606";
	};
	const changeLightMode = () => {
		setmode("grey");
		changestate();
		document.body.style.backgroundColor = "white";
	};
	return (
		<>
			<BrowserRouter>
				<Navbar
					mode={mode}
					changeBlueMode={changeBlueMode}
					changeGreenMode={changeGreenMode}
					changeRedMode={changeRedMode}
					changeLightMode={changeLightMode}
				/>
				<Routes>
					<Route path="/middle" element={<Middle/>} />
					<Route path="/home" element={<Home/>} />
					<Route path="/" element={<Home/>} />
				</Routes>
				<Bottom mode={mode} />
			</BrowserRouter>
		</>
	);
}

export default App;
