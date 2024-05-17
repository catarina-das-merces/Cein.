import React, { useContext, useState } from "react";
import styles from "./Signin.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Signin = () => {
	const { handleLogin } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		handleLogin(email, password);
	};

	return (
		<>
			<div className={styles.signin_container}>
				<div className={styles.signin_img_content}>
					<img className={styles.signin_image} src="signin_image.png" alt="" />
				</div>
				<div className={styles.signin_content}>
					<h5>Log in to your account</h5>
					<form className={styles.signin_content} onSubmit={handleFormSubmit}>
						<input
							className={styles.signin_input}
							type="email"
							id="email"
							value={email}
							onChange={handleEmailChange}
							placeholder="Email Address"
						/>
						<input
							type="password"
							id="pass"
							name="password"
							value={password}
							onChange={handlePasswordChange}
							placeholder="Password"
							className={styles.signin_input}
						/>
						<p className={styles.signin_psw_option}>Forgotten password?</p>
						<button type="submit" className={styles.signin_login_btn}>
							Login
						</button>
					</form>

					<h6>New to CEIN.?</h6>
					<p className={styles.signin_info}>
						With an account, you can save products to your cabinet, view your
						order history and swiftly checkout using saved details.
					</p>
					<Link to="/Signup" className={styles.signin_create_btn}>
						<span>Create account</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<g clipPath="url(#clip0_4_2461)">
								<path
									d="M3.75 12H20.25"
									stroke="#333333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M13.5 5.25L20.25 12L13.5 18.75"
									stroke="#333333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_4_2461">
									<rect width="24" height="24" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Signin;
