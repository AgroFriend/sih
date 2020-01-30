import React  from 'react'
import styles from "../styles/indexStyle.module.css"
import {Link} from 'gatsby'

class RegisterPageComponent extends React.Component {
    render() {
        return (
            <div id="registerBackground">
                <div id={styles.loginBlock}>
                    <div id={styles.logo}>
						<img src={require(`../drawable/logo.png`)} />
					</div>
                    <h5>Register</h5>
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
                        <p>Confirm Password:</p>
						<input type="password" placeholder="Enter password here"></input>
                    </div>
                    <button id={styles.loginButton}>Register</button>
					<div id={styles.secondDiv}>
						<Link id={styles.registerLink} to="./">
							Have an account..? <span>Sign In</span>
						</Link>
					</div>
                </div>
            </div>
        )
    }
}

export default RegisterPageComponent