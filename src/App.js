import Navbar from "./components/Navbar";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { useState } from "react";
import { changestate } from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
	const [mode, setmode] = useState("green");
	const changeBlueMode = () => {
		setmode("darkblue");
		changestate();
		document.body.style.backgroundColor = "#0a2052";
	};
	const changeGreenMode = () => {
		setmode("darkgreen");
		changestate();
		document.body.style.backgroundColor = "#042829";
	};
	const changeRedMode = () => {
		setmode("darkred");
		changestate();
		document.body.style.backgroundColor = "#531414"; 
	};
	const changeLightMode = () => {
		setmode("grey");
		changestate();
		document.body.style.backgroundColor = "#cecece";
	};
	const x = function (event) {
		document.getElementById("cursor").style.left = `${event.pageX-10}px`;
		document.getElementById("cursor").style.top = `${event.pageY-10}px`;
	};
	const y = function (event) {
		document.getElementById("cursor").style.display = `none`;
	};
	const z = function (xx) {
		if(xx.matches){
			document.getElementById("cursor").style.display = `none`;
		}
		else if(xy.matches){
			document.getElementById("cursor").style.display = `inline-block`;	
		}
		else if(xz.matches){
			document.getElementById("cursor").style.display = `none`;	
		}
		else{
			document.getElementById("cursor").style.display = `none`;	
		}
		
	};
	// let xx = window.matchMedia("(min-width: 200px)");
	let xy = window.matchMedia("(min-width: 1000px)");
	let xz = window.matchMedia("(min-width: 500px)");
	document.addEventListener("mousemove", x);
	document.addEventListener("mouseout", y)
	document.addEventListener("mouseover", z)
	const cursoron = () => {
		document.getElementById("cursor").style.transform = "scale(1)";
	};
	const cursordown = () => {
		document.getElementById("cursor").style.transform = "scale(0.7)";
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
					cursoron={cursoron}
					cursordown={cursordown}
				/>
				<Routes>
					<Route path="/middle" element={<Middle mode={mode} />} />
					<Route path="/home" element={<Home />} />
					<Route
						path="/contact"
						element={
							<Contact
								mode={mode}
								cursoron={cursoron}
								cursordown={cursordown}
							/>
						}
					/>
					<Route path="/" element={<Home />} />
				</Routes>
				<Bottom mode={mode} />
			</BrowserRouter>
		</>
	);
}

export default App;
