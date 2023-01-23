import React from "react";

export default function Contact(props) {
	const erase = () => {
		document
			.getElementsByClassName("contact_form")[0]
			.getElementsByTagName("input")[0].value = "";
		document
			.getElementsByClassName("contact_form")[0]
			.getElementsByTagName("input")[1].value = "";
		document
			.getElementsByClassName("contact_form")[0]
			.getElementsByTagName("textarea")[0].value = "";
	};
	return (
		<>
			<div className="contact">
				<div className="contact_head">
					<div className="contactpic"></div>
				</div>
				<div className="contact_area">
					<div
						className={`contact_message text-${
							props.mode === "grey" ? "dark" : "light"
						}`}>
						<span>Thanks for taking the time to reach out.</span>
						<span>How can I help you today?</span>
					</div>
					<div
						className={`contact_form text-${
							props.mode === "grey" ? "dark" : "light"
						}`}>
						<div className="nameemail">
							<div className="contactname">
								<label
									className={` text-${
										props.mode === "grey" ? "dark" : "light"
									}`}
									htmlFor="text">
									Name
								</label>
								<input
									className={` text-${
										props.mode === "grey" ? "dark" : "light"
									} bg-${props.mode}`}
									type="text"
								/>
							</div>
							<div className="contactemail">
								<label
									className={` text-${
										props.mode === "grey" ? "dark" : "light"
									}`}
									htmlFor="email">
									Email
								</label>
								<input
									className={` text-${
										props.mode === "grey" ? "dark" : "light"
									} bg-${props.mode}`}
									type="email"
								/>
							</div>
						</div>
						<div className="contactmessage">
							<label
								className={` text-${props.mode === "grey" ? "dark" : "light"}`}
								htmlFor="message">
								Message
							</label>
							<textarea
								className={` text-${
									props.mode === "grey" ? "dark" : "light"
								} bg-${props.mode}`}
								type="text"
							/>
						</div>
						<div className="submitbtn">
							<button
								onMouseUp={props.cursoron}
								onMouseDown={props.cursordown}
								className={` text-${props.mode === "grey" ? "dark" : "light"}`}
								type="submit">
								{" "}
								Submit
							</button>
							<div
								onClick={erase}
								onMouseUp={props.cursoron}
								onMouseDown={props.cursordown}
								className={`clearall `}>
								<i
									className={`fa-solid fa-repeat fa-sl text-${
										props.mode === "grey" ? "dark" : "light"
									}`}></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
