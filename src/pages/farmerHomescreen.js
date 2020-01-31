import React from "react"
import a from "../styles/farmerHomescreenStyle.module.css"
import { Link } from "gatsby"

class FarmerHomescreen extends React.Component {
	render() {
		return (
			<div id={a.fhAll}>
            	<div className={a.fhTopBar}>
            	    <div id={a.fhLogo}>
						<img src={require(`../drawable/logo.png`)} />
					</div>
            	</div>
				<div className={a.homePanel}>

					<div className={a.fhSidePanel}>
						<div className={a.fhPagesPanel}>
							<div className={a.fhProfileName}>
								<div id={a.fhProfilePhoto}>
									<img src={require(`../drawable/profielPhoto.png`)} />
								</div>
								<p>Full Name</p>
							</div>
							<div id={a.fhLinksDiv}>
								<Link className={a.fhLinks} to="./farmerHomescreen">Profile1</Link>
								<Link className={a.fhLinks} to="./farmerHomescreen">Profile1</Link>
								<Link className={a.fhLinks} to="./farmerHomescreen">Profile1</Link>
								<Link className={a.fhLinks} to="./farmerHomescreen">Profile1</Link>
								<Link className={a.fhLinks} to="./farmerHomescreen">Profile1</Link>
								<Link className={a.fhLinks} to="./farmerHomescreen">Profile1</Link>
							</div>
						</div>
						<div className={a.fhNotificationPanel}>
							<p>Nofications</p>
						</div>
					</div>

					<div className={a.fhMainPanel}>
						<div className={a.searchDiv}>
							<div className={a.selectType}>
								<p>Warehouse</p>
								<p>Logistics</p>
							</div>
							<input type="text" name="FirstName" placeholder="Search Keyword"></input>
							<button className={a.fhSearchButton}>Search</button>
						</div>
						<div className={a.farmerPost}>
							<div className={a.cropNameDiv}>
								<p>Crop Image</p>
							</div>
							<div className={a.cropImageDiv}>

							</div>
							<div className={a.cropDescriptionDiv}>
								<div>
									<p>Quantity: </p>
									<p>Date: </p>
								</div>
								<p>Crop Description</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default FarmerHomescreen
