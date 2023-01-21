import React from 'react'

export default function Bottom(props) {
  return (
		<>
			<div class={`basecss bg-${props.mode}`}>
				<span>❤️</span>
				<span className={`text-${props.mode === "grey" ? "dark" : "light"}`}>
					Made with love by
				</span>
				<span className={`text-${props.mode === "grey" ? "dark" : "light"}`}>
					Nikhil Shekhawat
				</span>
			</div>
		</>
	);
}
