import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [userLogged, setUserLogged] = useState(null);
	const menuRef = useRef(null);

	const handleUserLogOut = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		setUserLogged(null);
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const handleOutsideClick = (event) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setIsMenuOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUserLogged(JSON.parse(storedUser));
		}
	}, []);

	return (
		<>
			<div className={styles.announcement_bar}>
				<p>
					Click and Collect is now available. Complimentary shipping over $400.
				</p>
			</div>

			<div
				className={` ${styles.menu_section} ${
					isMenuOpen ? styles.menu_open : ""
				} `}
				ref={menuRef}
			>
				<div className={styles.hamburguer} onClick={toggleMenu}>
					{!isMenuOpen && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
						>
							<g clipPath="url(#clip0_18_417)">
								<path
									d="M2.1875 7H11.8125"
									stroke="#333333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M2.1875 3.5H11.8125"
									stroke="#333333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M2.1875 10.5H11.8125"
									stroke="#333333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_18_417">
									<rect width="14" height="14" fill="white" />
								</clipPath>
							</defs>
						</svg>
					)}
					{isMenuOpen && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
						>
							<g clipPath="url(#clip0_54_2898)">
								<path
									d="M10.9375 3.0625L3.0625 10.9375"
									stroke="#333333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M10.9375 10.9375L3.0625 3.0625"
									stroke="#333333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_54_2898">
									<rect width="14" height="14" fill="white" />
								</clipPath>
							</defs>
						</svg>
					)}
				</div>

				<nav
					className={` ${styles.desktop_options} ${
						isMenuOpen ? styles.menu_options_open : styles.menu_options_close
					}`}
				>
					<ul>
						<Link to="/productpage" onClick={closeMenu}>
							<li>Shop</li>
						</Link>
						<Link to="/about" onClick={closeMenu}>
							<li>About Us</li>
						</Link>
						<Link to="/blog" onClick={closeMenu}>
							<li>Journal</li>
						</Link>
					</ul>
				</nav>

				<div className={styles.menu_logo}>
					<Link to="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="87"
							height="20"
							viewBox="0 0 87 20"
							fill="none"
						>
							<g clipPath="url(#clip0_2_255)">
								<path
									d="M75.2534 0.326904V19.7274H71.4932L60.9482 6.3487V19.673H56.425V0.326904H61.6839L70.8392 12.1798V0.326904H75.2534Z"
									fill="black"
								/>
								<path
									d="M45.9695 19.673V0.326904H50.6016V19.673H45.9695Z"
									fill="black"
								/>
								<path
									d="M24.2563 19.673V0.326904H40.4416V4.14162H28.8885V7.62936H35.7822V11.5258H28.8885V15.6675H41.5043V19.673H24.2563Z"
									fill="black"
								/>
								<path
									d="M10.4183 20C7.51181 20 5.13215 19.0554 3.27929 17.1662C1.42643 15.2589 0.5 12.8701 0.5 10C0.5 7.07539 1.43551 4.67757 3.30654 2.80654C5.17757 0.935514 7.54814 0 10.4183 0C12.2166 0 13.8697 0.390554 15.3774 1.17166C16.9033 1.93461 18.0568 3.06994 18.8379 4.57766C19.2193 5.3406 19.4646 5.99455 19.5736 6.53951H14.8597C14.7688 6.37602 14.6054 6.14896 14.3692 5.85831C13.8061 5.24069 13.0795 4.75931 12.1894 4.41417C11.6626 4.25068 11.0722 4.16894 10.4183 4.16894C8.81971 4.16894 7.55722 4.74115 6.63079 5.88556C5.70436 7.01181 5.24114 8.38329 5.24114 10C5.24114 11.6349 5.71344 13.0154 6.65804 14.1417C7.60263 15.2679 8.85604 15.8311 10.4183 15.8311C12.1803 15.8311 13.5154 15.2679 14.4237 14.1417C14.6962 13.7602 14.8506 13.5332 14.8869 13.4605H19.5736C19.3738 14.7139 18.8015 15.8583 17.8569 16.8937C16.9124 17.911 15.8134 18.6921 14.5599 19.2371C13.47 19.7457 12.0895 20 10.4183 20Z"
									fill="black"
								/>
								<circle cx="82" cy="17.5" r="2.5" fill="black" />
							</g>
							<defs>
								<clipPath id="clip0_2_255">
									<rect
										width="86"
										height="20"
										fill="white"
										transform="translate(0.5)"
									/>
								</clipPath>
							</defs>
						</svg>
					</Link>
				</div>

				<div className={styles.menu_icons}>
					{userLogged && (
						<div className={styles.login_stuff}>
							<p>Hi, {userLogged.name}! </p>
							<svg
								width="14"
								height="14"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								onClick={handleUserLogOut}
							>
								<path
									fill="#555"
									d="M10.2392344,0 C13.3845587,0 16.2966635,1.39466883 18.2279685,3.74426305 C18.4595621,4.02601608 18.4134356,4.43777922 18.124942,4.66396176 C17.8364485,4.89014431 17.4148346,4.84509553 17.183241,4.5633425 C15.5035716,2.51988396 12.9739849,1.30841121 10.2392344,1.30841121 C5.32416443,1.30841121 1.33971292,5.19976806 1.33971292,10 C1.33971292,14.8002319 5.32416443,18.6915888 10.2392344,18.6915888 C13.0144533,18.6915888 15.5774656,17.443711 17.2546848,15.3485857 C17.4825482,15.0639465 17.9035339,15.0136047 18.1949827,15.2361442 C18.4864315,15.4586837 18.5379776,15.8698333 18.3101142,16.1544725 C16.3816305,18.5634688 13.4311435,20 10.2392344,20 C4.58426141,20 8.8817842e-14,15.5228475 8.8817842e-14,10 C8.8817842e-14,4.4771525 4.58426141,0 10.2392344,0 Z M17.0978642,7.15999289 L19.804493,9.86662172 C20.0660882,10.1282169 20.071043,10.5473918 19.8155599,10.802875 L17.17217,13.4462648 C16.9166868,13.701748 16.497512,13.6967932 16.2359168,13.435198 C15.9743215,13.1736028 15.9693667,12.7544279 16.2248499,12.4989447 L17.7715361,10.9515085 L7.46239261,10.9518011 C7.0924411,10.9518011 6.79253615,10.6589032 6.79253615,10.2975954 C6.79253615,9.93628766 7.0924411,9.64338984 7.46239261,9.64338984 L17.7305361,9.64250854 L16.1726778,8.08517933 C15.9110825,7.82358411 15.9061278,7.40440925 16.1616109,7.14892607 C16.4170941,6.89344289 16.836269,6.89839767 17.0978642,7.15999289 Z"
								/>
							</svg>
						</div>
					)}

					<Link to="/signin">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							className={styles.user}
						>
							<g clipPath="url(#clip0_2_276)">
								<path
									d="M11.6666 12.25V11.0833C11.6666 10.4645 11.4208 9.871 10.9832 9.43342C10.5456 8.99583 9.95209 8.75 9.33325 8.75H4.66659C4.04775 8.75 3.45425 8.99583 3.01667 9.43342C2.57908 9.871 2.33325 10.4645 2.33325 11.0833V12.25"
									stroke="#333333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M7.00008 6.41667C8.28875 6.41667 9.33341 5.372 9.33341 4.08333C9.33341 2.79467 8.28875 1.75 7.00008 1.75C5.71142 1.75 4.66675 2.79467 4.66675 4.08333C4.66675 5.372 5.71142 6.41667 7.00008 6.41667Z"
									stroke="#333333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_2_276">
									<rect width="14" height="14" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</Link>

					<Link to="/cart">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							className={styles.cart}
						>
							<g clipPath="url(#clip0_2_281)">
								<path
									d="M11.8125 3.9375H2.1875C1.94588 3.9375 1.75 4.13338 1.75 4.375V10.9375C1.75 11.1791 1.94588 11.375 2.1875 11.375H11.8125C12.0541 11.375 12.25 11.1791 12.25 10.9375V4.375C12.25 4.13338 12.0541 3.9375 11.8125 3.9375Z"
									stroke="#333333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M4.8125 5.25V3.5C4.8125 2.91984 5.04297 2.36344 5.4532 1.9532C5.86344 1.54297 6.41984 1.3125 7 1.3125C7.58016 1.3125 8.13656 1.54297 8.5468 1.9532C8.95703 2.36344 9.1875 2.91984 9.1875 3.5V5.25"
									stroke="#333333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_2_281">
									<rect width="14" height="14" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Header;
