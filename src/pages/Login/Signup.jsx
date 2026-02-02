import React, { useContext } from "react";
import styles from "./Signup.module.css";
import { AuthContext } from "../../Context/AuthContext";

const Signup = () => {
	const {
		handleSubmit,
		name,
		setName,
		email,
		setEmail,
		password,
		setPassword,
	} = useContext(AuthContext);
	return (
		<>
			<div className={styles.signup_container}>
				<div>
					<img className={styles.signup_image} src="signin_image.png" alt="" />
				</div>
				<div className={styles.signup_content}>
					<h5>Create a new account</h5>
					<form className={styles.signup_content} onSubmit={handleSubmit}>
						<input
							className={styles.signup_input}
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							placeholder="Name"
						/>
						<input
							className={styles.signup_input}
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							size="30"
							required
							placeholder="Email Address"
						/>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							minLength="8"
							required
							placeholder="Password"
							className={styles.signup_input}
						/>
						<button type="submit" className={styles.signup_login_btn}>
							Create Account
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Signup;
