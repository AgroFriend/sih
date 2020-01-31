import React from "react"
import a from "../styles/homePage.module.css"
import { Link } from "gatsby"

class IndexPage extends React.Component {
	render() {
		return (
			<div id={a.all}>
				<div id={a.semiCurve}>
					<div id={a.insideSemiCurve}>
						<div id={a.topBar}>
							<div id={a.logo}>
								<img src={require(`../drawable/logo.png`)} />
							</div>
							<div id={a.linkDiv}>
								<Link id={a.linkTag} to="./login">LOGIN</Link>
								<Link id={a.linkTag} to="./register">REGISTER</Link>
							</div>
						</div >
						<div id={a.fourHands}>
							<img src={require(`../drawable/4Hands.svg`)} />
						</div>
						<p>As India stood 97th and 103rd in Oxfam's Food availability index and Global hunger Index respectively. The website is an effort to manage food wastage by creating network of Farmers, Warehouse and Logistics.</p>
					</div>
				</div>
				
				
				<div className={a.container, a.fwlContainer}>
					
					<div className={a.blk}>
						<div className={a.images}>
							<img src={require(`../drawable/farmers.svg`)} />	
						</div>
						<p className={a.flwP}>Farmers are center of the network, as they are the ones who work hard in the fields to grow the crops. This website will help to ensure the hard earned crops are store safely in a warehouse.</p>	
					</div>
				</div>
				
				<div className={a.grayContainer}>
					<div className={a.limages}>
						<img src={require(`../drawable/logistics.svg`)} />	
					</div>
					<p className={a.flwP}>A great logistics service will contribute in seamless experience for both farmers and warehouses. Logistics will act as a bridge between the two entities and ensure safe and optimum transfer of crops from farmer to warehouse.</p>
				</div>

				<div className={a.fwlContainer}>
					<div className={a.blk}>
						<div className={a.images}>
							<img src={require(`../drawable/warehouses.svg`)} />	
						</div>
						<p className={a.flwP}>As the main motive of this website is to prevent wastage of food storage so the storage of crops and other resources should be optimum ion warehouses. To ensure the same, warehouse will be able to log current status of warehouse.</p>	
					</div>
				</div>
				<div id = {a.rSemiCurveDiv}>

					<div id={a.rsemiCurve}>
						<div id={a.insideRSemiCurve}>
							<p>By creating this network hopefully together we can prevent the wastages of food resources. In this tech era lets use technology to smartly manage the food resources.</p>
							<div id={a.peoplesImage}>
								<img src={require(`../drawable/peoples.svg`)} />
							</div>
						</div>
					</div>
				</div>
				<footer id={a.homeFooter} >
					<div id={a.footerLogo}>
						<img src={require(`../drawable/logo.png`)} />
					</div>
					<p id={a.footerAddress}>Pune Maharastra<br></br>India</p>
					<div id={a.footerLinks}>
						<p>Privacy Policy</p>
						<p>Terms & Conditions</p>
					</div>
				</footer>						
			</div>
		)
	}
}

export default IndexPage