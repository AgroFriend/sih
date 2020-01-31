import React from "react"
import a from "../styles/farmerHomescreenStyle.module.css"

class FarmerHomescreen extends React.Component {
	render() {
		return (
			<div id={a.fhAll}>
            	<div class={a.fhTopBar}>
            	    <div id={a.fhLogo}>
						<img src={require(`../drawable/logo.png`)} />
					</div>
            	</div>
			</div>
		)
	}
}

export default FarmerHomescreen
