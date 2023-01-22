import React from 'react'

export default function Middle(props) {
    let n=0;
    const changeshape = () => {
			if (n === 0) { 
				document.querySelector("#menu_container .lines.first").style.transform =
					"translate(0,1.3rem) rotate(45deg)";
				document.querySelector(
					"#menu_container .lines.second"
				).style.transform = "rotate(45deg)";
				document.querySelector("#menu_container .lines.third").style.transform =
					"translate(0,-1.3rem) rotate(135deg)";
				n = 1;
			} else {
				document.querySelector("#menu_container .lines.first").style.transform =
					"translate(0) rotate(0deg)";
				document.querySelector(
					"#menu_container .lines.second"
				).style.transform = "rotate(0deg)";
				document.querySelector("#menu_container .lines.third").style.transform =
					"translate(0) rotate(0deg)";
				n = 0;
			}
		}
  return (
		<>
			<section>
				<div id="contain">
					{/* <!-- css 100 --> */}
					<div className="days_100_container">
						<div className="css_text">
							<div className="one"></div>
							<div className="zero"></div>
							<div className="zero"></div>
						</div>
						<div className="normal_text">
							<span className="days">DAYS</span>
							<span className="challenge">CSS CHALLENGE</span>
						</div>
					</div>
					{/* <!-- spiral  --> */}
					<div className="spiraladd_container">
						<div className="spiral_circle outer"></div>
						<div className="spiral_circle middle"></div>
						<div className="spiral_circle inner"></div>
					</div>
					{/* <!-- notification --> */}
					<div className="notification_container">
						<div className="notification">
							<div className="notify_top">
								<i className="fa-solid fa-list fa-xl"></i>
								<span>Notifications</span>
								<i className="fa-solid fa-magnifying-glass fa-xl"></i>
							</div>
							<div className="notify_bottom">
								<div className="note">
									<span className="note_time">9:24 AM</span>
									<span className="noti">
										John Walker posted a photo on your wall.
									</span>
								</div>
								<div className="note">
									<span className="note_time">8:19 AM</span>
									<span className="noti">
										Alice Parker commented your last post.
									</span>
								</div>
								<div className="note">
									<span className="note_time">Yesterday</span>
									<span className="noti">Luke Wayne added you as friend.</span>
								</div>
							</div>
							<div className="note_line"></div>
						</div>
					</div>
					{/* <!-- profile --> */}
					<div className="info_container">
						<div className="info">
							<div className="info_item1">
								<div className="ppic">
									<img src="./images/profilee.jpg" alt="profile" />
								</div>
								<div className="pname">
									<span> Jessica Potter</span>
									<span>Visual Artist</span>
								</div>
								<div className="follow">Follow</div>
								<div className="follow">Message</div>
							</div>
							<div className="info_item2">
								<span>523</span>
								<span>Posts</span>
							</div>
							<div className="info_item3">
								<span>1333</span>
								<span>Likes</span>
							</div>
							<div className="info_item4">
								<span>145</span>
								<span>Followers</span>
							</div>
						</div>
					</div>
					{/* <!-- pyramide  --> */}
					<div className="pyramide_container">
						<div className="pyramide_circle">
							<div className="sun"></div>
							<div className="pyramide"></div>
							<div className="pyramide_side"></div>
							<div className="sand"></div>
						</div>
					</div>
					{/* <!-- menu  --> */}
					<div id="menu_container">
						<button className="butt" onClick={changeshape}>
							<div
								className={`lines first bg-${
									props.mode === "grey" ? "dark" : "light"
								}`}></div>
							<div
								className={`lines second bg-${
									props.mode === "grey" ? "dark" : "light"
								}`}></div>
							<div
								className={`lines third bg-${
									props.mode === "grey" ? "dark" : "light"
								}`}></div>
						</button>
					</div>
					{/* <!-- waves --> */}
					<div className="container">
						<div className="wave1"></div>
						<div className="wave2"></div>
						<div className="wave3"></div>
					</div>
					{/* <!-- clock  --> */}
					<div id="clock">
						<div id="clock_container">
							<div className="clock_inner">
								<div className="clock_time">22°</div>
								<div className="clock_deg">
									<div className="deg1">19</div>
									<div className="deg2">20</div>
								</div>
								<div className="clock_room">bedroom</div>
							</div>
							<div className="base"></div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
