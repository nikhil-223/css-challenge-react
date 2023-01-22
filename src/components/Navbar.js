import React from 'react'
import { Link } from 'react-router-dom';


let n = 0;
const changestate = () => {
	if (n === 0) {
		document.querySelector(".lines.first").style.transform =
			"translate(0,1.3rem) rotate(45deg)";
		document.querySelector(".lines.second").style.transform = "rotate(45deg)";
		document.querySelector(".lines.third").style.transform =
			"translate(0,-1.3rem) rotate(135deg)";
		document.querySelector(".menu_search").classList.add("menu_search_before");
		document.querySelector(".navbar_menu").classList.add("navbar_menu_before");
		document.querySelector(".navbar").classList.add("navbar_before");
		document
			.querySelectorAll(".menu_item1")[0]
			.classList.add("menu_item_before");
		n = 1;
	} else {
		document.querySelector(".lines.first").style.transform =
			"translate(0) rotate(0deg)";
		document.querySelector(".lines.second").style.transform = "rotate(0deg)";
		document.querySelector(".lines.third").style.transform =
			"translate(0) rotate(0deg)";
		document
			.querySelector(".menu_search")
			.classList.remove("menu_search_before");
		document
			.querySelector(".navbar_menu")
			.classList.remove("navbar_menu_before");
		document.querySelector(".navbar").classList.remove("navbar_before");
		n = 0;
	}
}; 
export default function Navbar(props) {
		const changepage1=()=>{
			changestate();
			document.getElementsByClassName("animation")[0].style.width="5rem"
			document.getElementsByClassName("animation")[0].style.left="8rem"
		}
		const changepage2=()=>{
			changestate();
			document.getElementsByClassName("animation")[0].style.width="5rem"
			document.getElementsByClassName("animation")[0].style.left="14rem"
		}
		const changepage3=()=>{
			changestate();
			document.getElementsByClassName("animation")[0].style.width="7rem"
			document.getElementsByClassName("animation")[0].style.left="20rem"
		}
        const link_icon = () => {
					// location.href = "https://100dayscss.com/";
					window.open("https://100dayscss.com/");
				}
  return (
		<>
			<nav className={`navbar bg-${props.mode}`}>
				<ul className="navbar_menu">
					<li
						className={`menu_item_before menu_item1 text-${
							props.mode === "grey" ? "dark" : "light"
						}`}
						onClick={link_icon}>
						<i className="fa-brands fa-wolf-pack-battalion fa-2xl"></i>
					</li>
					<li
						className={`menu_item text-${
							props.mode === "grey" ? "dark" : "light"
						}`}>
						<Link
							onClick={changepage1}
							className={`link_act text-${
								props.mode === "grey" ? "dark" : "light"
							}`}
							to="/home">
							Home
						</Link>
					</li>
					<li
						className={`menu_item text-${
							props.mode === "grey" ? "dark" : "light"
						}`}>
						<Link
							onClick={changepage2}
							className={`link_act text-${
								props.mode === "grey" ? "dark" : "light"
							}`}
							to="/middle">
							CSS
						</Link>
					</li>
					<li
						className={`menu_item text-${
							props.mode === "grey" ? "dark" : "light"
						}`}>
						<Link
							onClick={changepage3}
							className={`link_act text-${
								props.mode === "grey" ? "dark" : "light"
							}`}
							to="/middle">
							Favourites
						</Link>
					</li>
					<div className="animation start_home"></div>
				</ul>
				<div className="menu_search">
					<div
						className="bg-red mx-2 my-2 pallete"
						onClick={props.changeRedMode}></div>
					<div
						className="bg-green mx-2 my-2 pallete"
						onClick={props.changeGreenMode}></div>
					<div
						className="bg-blue mx-2 my-2 pallete"
						onClick={props.changeBlueMode}></div>
					<div
						className="bg-light mx-2 my-2 pallete"
						onClick={props.changeLightMode}></div>
				</div>
				<div className="menu_bar_res">
					<div
						className={`icon text-${props.mode === "grey" ? "dark" : "light"}`}
						onClick={link_icon}>
						<i className="fa-brands fa-wolf-pack-battalion fa-2xl"></i>
					</div>
					<button className="butt" onClick={changestate}>
						<div
							className={`lines first bg-${
								props.mode === "grey" ? "dark" : "light"
							}`}></div>
						<div
							className={`lines second bg-${
								props.mode === "grey" ? "dark" : "light"
							} `}></div>
						<div
							className={`lines third bg-${
								props.mode === "grey" ? "dark" : "light"
							}`}></div>
					</button>
				</div>
			</nav>
		</>
	);
}
export { changestate };