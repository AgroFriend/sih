import React from "react"
import styles from "../styles/homePage.module.css"
import { Link } from "gatsby"

class IndexPage extends React.Component {
	render() {
		return (
			<div id={styles.all}>
				<div id={styles.semiCurve}>
					<div id={styles.topBar}>
						<div id={styles.logo}>
							<img src={require(`../drawable/logo.png`)} />
						</div>
						<div id={styles.linkDiv}>
							<Link id={styles.linkTag} to="./login">LOGIN</Link>
							<Link id={styles.linkTag} to="./register">REGISTER</Link>
						</div>
					</div >
					<div id={styles.fourHands}>
						<img src={require(`../drawable/4Hands.svg`)} />
					</div>
					<p>As India stood 97th and 103rd in Oxfam's Food availability index and Global hunger Index respectively. The website is an effort to manage food wastage by creating network of Farmers, Warehouse and Logistics.</p>	
				</div>
			</div>
		)
	}
}

export default IndexPage
