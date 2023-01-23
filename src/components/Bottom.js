import React from 'react'

export default function Bottom(props) {
	const linkedIn=()=>{
		window.open("https://www.linkedin.com/in/nikhil-shekhawat-986385179/");
	}
	const gitHub=()=>{
		window.open("https://github.com/nikhil-223");
	}
  return (
		<>
			<div className={`basecss bg-${props.mode}`}>
				<div
					className={` profile_text text-${
						props.mode === "grey" ? "dark" : "light"
					}`}>
					<span>Nikhil Shekhawat</span>
				</div>
				<div
					className={`profile_links text-${
						props.mode === "grey" ? "dark" : "light"
					}`}>
					<i id='linkedin' onClick={linkedIn} className=" fa-brands fa-linkedin fa-2xl"></i>
					<i id='github' onClick={gitHub} className=" fa-brands fa-square-github  fa-2xl"></i>
					<div className='githublabel'> GitHub</div>
					<div className='linkedinlabel'> Linked In</div>
				</div>
			</div>
		</>
	);
}
