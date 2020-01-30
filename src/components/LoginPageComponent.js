import React from "react"
import styles from "../styles/indexStyle.module.css"
import {Link} from 'gatsby'

class LoginPage extends React.Component {
	render() {
		return (
			<div>
				<div id={styles.loginBlock}>
					<div id={styles.logo}>
						<img src={require(`../drawable/logo.png`)} />
					</div>
					<h5>Login</h5>

					<div id={styles.formDiv}>
						<p>Type:</p>
						<select name="type" id={styles.selectType}>
							<option value="" disabled selected>
								Select Type of Account
							</option>
							<option value="farmer">Farmer</option>
							<option value="logistic">Logistic</option>
							<option value="warehouse">Warehouse</option>
						</select>
						<p>Email:</p>
						<input
							id={styles.emailField}
							type="email"
							placeholder="Enter email id here"
						></input>
						<p>Password:</p>
						<input type="password" placeholder="Enter password here"></input>
						<div id={styles.forgot}>
							<a >
								Forgot Passsword..?
							</a>
						</div>
					</div>
					<button id={styles.loginButton}>Login</button>
					<div id={styles.secondDiv}>
						<Link id={styles.registerLink} to="./register">
							Don't have an account..? <span>Sign Up</span>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default LoginPage
