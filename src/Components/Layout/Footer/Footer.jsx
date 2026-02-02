import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className={styles.footer_section}>
				<div className={styles.footer_content}>
					<div className={styles.footer_social}>
						<Link to="/">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="86"
								height="20"
								viewBox="0 0 86 20"
								fill="none"
								className={styles.footer_logo}
							>
								<g clipPath="url(#clip0_29_138)">
									<path
										d="M74.7534 0.327148V19.7277H70.9932L60.4482 6.34895V19.6732H55.925V0.327148H61.1839L70.3392 12.18V0.327148H74.7534Z"
										fill="white"
									/>
									<path
										d="M45.4695 19.6732V0.327148H50.1016V19.6732H45.4695Z"
										fill="white"
									/>
									<path
										d="M23.7563 19.6732V0.327148H39.9416V4.14186H28.3885V7.6296H35.2822V11.5261H28.3885V15.6677H41.0043V19.6732H23.7563Z"
										fill="white"
									/>
									<path
										d="M9.91826 20C7.01181 20 4.63215 19.0554 2.77929 17.1662C0.92643 15.2589 0 12.8701 0 10C0 7.07539 0.935513 4.67757 2.80654 2.80654C4.67757 0.935514 7.04814 0 9.91826 0C11.7166 0 13.3697 0.390554 14.8774 1.17166C16.4033 1.93461 17.5568 3.06994 18.3379 4.57766C18.7193 5.3406 18.9646 5.99455 19.0736 6.53951H14.3597C14.2688 6.37602 14.1054 6.14896 13.8692 5.85831C13.3061 5.24069 12.5795 4.75931 11.6894 4.41417C11.1626 4.25068 10.5722 4.16894 9.91826 4.16894C8.31971 4.16894 7.05722 4.74115 6.13079 5.88556C5.20436 7.01181 4.74114 8.38329 4.74114 10C4.74114 11.6349 5.21344 13.0154 6.15804 14.1417C7.10263 15.2679 8.35604 15.8311 9.91826 15.8311C11.6803 15.8311 13.0154 15.2679 13.9237 14.1417C14.1962 13.7602 14.3506 13.5332 14.3869 13.4605H19.0736C18.8738 14.7139 18.3015 15.8583 17.3569 16.8937C16.4124 17.911 15.3134 18.6921 14.0599 19.2371C12.97 19.7457 11.5895 20 9.91826 20Z"
										fill="white"
									/>
									<circle cx="81.5" cy="17.5" r="2.5" fill="white" />
								</g>
								<defs>
									<clipPath id="clip0_29_138">
										<rect width="86" height="20" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</Link>
						<p>FOLLOW US</p>
						<div className={styles.social_icons}>
							<Link to="https://twitter.com/?lang=pt">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										d="M21.057 7.18066C21.0663 7.39186 21.0663 7.59346 21.0663 7.80466C21.0755 14.2079 16.3711 21.5999 7.76781 21.5999C5.23036 21.5999 2.73921 20.8415 0.599976 19.4207C0.970406 19.4687 1.34084 19.4879 1.71127 19.4879C3.81346 19.4879 5.86009 18.7583 7.51777 17.4047C5.51744 17.3663 3.7579 16.0127 3.14669 14.0351C3.8505 14.1791 4.57284 14.1503 5.25814 13.9487C3.08186 13.5071 1.51679 11.5199 1.50753 9.20626C1.50753 9.18706 1.50753 9.16786 1.50753 9.14866C2.15578 9.52306 2.88738 9.73426 3.62825 9.75346C1.58162 8.33266 0.942624 5.50065 2.18357 3.28304C4.56358 6.31665 8.06415 8.15026 11.824 8.35186C11.4443 6.67185 11.9629 4.90545 13.1761 3.71505C15.056 1.88144 18.0195 1.97744 19.7975 3.92625C20.844 3.71505 21.8534 3.31184 22.7702 2.74544C22.4183 3.86865 21.6867 4.81905 20.7144 5.42385C21.6404 5.30865 22.548 5.04945 23.4 4.66545C22.7702 5.64465 21.9738 6.48945 21.057 7.18066Z"
										fill="white"
									/>
								</svg>
							</Link>
							<Link to="https://www.instagram.com/">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<g clipPath="url(#clip0_29_148)">
										<path
											d="M12 2.16276C15.206 2.16276 15.5824 2.17705 16.8496 2.23422C18.0215 2.28662 18.655 2.48194 19.079 2.64867C19.6411 2.8678 20.0413 3.12505 20.4605 3.54426C20.8797 3.96348 21.1417 4.36364 21.3561 4.92576C21.5181 5.34974 21.7182 5.98333 21.7706 7.15522C21.8277 8.42239 21.842 8.79873 21.842 12.0048C21.842 15.2108 21.8277 15.5871 21.7706 16.8543C21.7182 18.0262 21.5228 18.6598 21.3561 19.0838C21.137 19.6459 20.8797 20.046 20.4605 20.4653C20.0413 20.8845 19.6411 21.1465 19.079 21.3609C18.655 21.5228 18.0215 21.7229 16.8496 21.7753C15.5824 21.8325 15.206 21.8468 12 21.8468C8.79397 21.8468 8.41763 21.8325 7.15046 21.7753C5.97857 21.7229 5.34498 21.5276 4.921 21.3609C4.35888 21.1417 3.95872 20.8845 3.5395 20.4653C3.12029 20.046 2.85828 19.6459 2.64391 19.0838C2.48194 18.6598 2.28186 18.0262 2.22946 16.8543C2.17229 15.5871 2.158 15.2108 2.158 12.0048C2.158 8.79873 2.17229 8.42239 2.22946 7.15522C2.28186 5.98333 2.47718 5.34974 2.64391 4.92576C2.86304 4.36364 3.12029 3.96348 3.5395 3.54426C3.95872 3.12505 4.35888 2.86304 4.921 2.64867C5.34498 2.4867 5.97857 2.28662 7.15046 2.23422C8.41763 2.17229 8.79874 2.16276 12 2.16276ZM12 0C8.74157 0 8.33188 0.0142914 7.05042 0.0714569C5.77372 0.128622 4.90195 0.333466 4.13974 0.628821C3.34895 0.933704 2.68202 1.34815 2.01509 2.01509C1.34815 2.68202 0.938468 3.35371 0.628821 4.13974C0.333466 4.90195 0.128623 5.77372 0.071457 7.05518C0.0142914 8.33188 0 8.74156 0 12C0 15.2584 0.0142914 15.6681 0.071457 16.9496C0.128623 18.2263 0.333466 19.0981 0.628821 19.865C0.933704 20.6558 1.34815 21.3227 2.01509 21.9897C2.68202 22.6566 3.35371 23.0663 4.13974 23.3759C4.90195 23.6713 5.77372 23.8761 7.05519 23.9333C8.33665 23.9905 8.74157 24.0048 12.0048 24.0048C15.268 24.0048 15.6729 23.9905 16.9544 23.9333C18.2311 23.8761 19.1028 23.6713 19.8698 23.3759C20.6606 23.0711 21.3275 22.6566 21.9945 21.9897C22.6614 21.3227 23.0711 20.6511 23.3807 19.865C23.6761 19.1028 23.8809 18.231 23.9381 16.9496C23.9953 15.6681 24.0095 15.2632 24.0095 12C24.0095 8.7368 23.9953 8.33188 23.9381 7.05042C23.8809 5.77372 23.6761 4.90195 23.3807 4.13497C23.0758 3.34418 22.6614 2.67725 21.9945 2.01032C21.3275 1.34339 20.6558 0.933704 19.8698 0.624057C19.1076 0.328702 18.2358 0.123859 16.9544 0.0666931C15.6681 0.0142914 15.2584 0 12 0Z"
											fill="white"
										/>
										<path
											d="M12 5.84033C8.59869 5.84033 5.83569 8.59857 5.83569 12.0047C5.83569 15.4108 8.59393 18.169 12 18.169C15.4062 18.169 18.1644 15.4108 18.1644 12.0047C18.1644 8.59857 15.4062 5.84033 12 5.84033ZM12 16.0015C9.78964 16.0015 7.99846 14.2103 7.99846 11.9999C7.99846 9.78952 9.78964 7.99833 12 7.99833C14.2104 7.99833 16.0016 9.78952 16.0016 11.9999C16.0016 14.2103 14.2104 16.0015 12 16.0015Z"
											fill="white"
										/>
										<path
											d="M18.4073 7.03114C19.2018 7.03114 19.846 6.38703 19.846 5.59247C19.846 4.79792 19.2018 4.15381 18.4073 4.15381C17.6127 4.15381 16.9686 4.79792 16.9686 5.59247C16.9686 6.38703 17.6127 7.03114 18.4073 7.03114Z"
											fill="white"
										/>
									</g>
									<defs>
										<clipPath id="clip0_29_148">
											<rect width="24" height="24" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</Link>
							<Link to="https://www.facebook.com/">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										d="M17.2137 13.3283L17.8356 9.23311H13.9452V6.5768C13.9452 5.45617 14.4877 4.3632 16.2301 4.3632H18V0.876797C18 0.876797 16.3945 0.600098 14.8603 0.600098C11.6548 0.600098 9.56164 2.56189 9.56164 6.11194V9.23311H6V13.3283H9.56164V23.2285C10.2767 23.342 11.0082 23.4001 11.7534 23.4001C12.4986 23.4001 13.2301 23.342 13.9452 23.2285V13.3283H17.2137Z"
										fill="white"
									/>
								</svg>
							</Link>
						</div>
					</div>

					<div className={styles.products}>
						<h6>Products</h6>
						<p>Inner Care</p>
						<p>Skin Care</p>
						<p>Scalp Care</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="21"
							viewBox="0 0 20 21"
							fill="none"
							className={styles.plus_menu}
						>
							<g clipPath="url(#clip0_29_464)">
								<path
									d="M3.125 10.5H16.875"
									stroke="white"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M10 3.625V17.375"
									stroke="white"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_29_464">
									<rect
										width="20"
										height="20"
										fill="white"
										transform="translate(0 0.5)"
									/>
								</clipPath>
							</defs>
						</svg>
					</div>
					<div className={styles.guides}>
						<h6>Guides</h6>
						<p>News</p>
						<p>Vision</p>
						<p>Q&A</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="21"
							viewBox="0 0 20 21"
							fill="none"
							className={styles.plus_menu}
						>
							<g clipPath="url(#clip0_29_464)">
								<path
									d="M3.125 10.5H16.875"
									stroke="white"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M10 3.625V17.375"
									stroke="white"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_29_464">
									<rect
										width="20"
										height="20"
										fill="white"
										transform="translate(0 0.5)"
									/>
								</clipPath>
							</defs>
						</svg>
					</div>
					<div className={styles.service}>
						<h6>Service</h6>
						<p>About Concierge</p>
						<p>Online Consultation</p>
						<p>Market</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="21"
							viewBox="0 0 20 21"
							fill="none"
							className={styles.plus_menu}
						>
							<g clipPath="url(#clip0_29_464)">
								<path
									d="M3.125 10.5H16.875"
									stroke="white"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M10 3.625V17.375"
									stroke="white"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_29_464">
									<rect
										width="20"
										height="20"
										fill="white"
										transform="translate(0 0.5)"
									/>
								</clipPath>
							</defs>
						</svg>
					</div>
					<div className={styles.contact}>
						<h6>Contact</h6>
						<p>Contact Us</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="21"
							viewBox="0 0 20 21"
							fill="none"
							className={styles.plus_menu}
						>
							<g clipPath="url(#clip0_29_464)">
								<path
									d="M3.125 10.5H16.875"
									stroke="white"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M10 3.625V17.375"
									stroke="white"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_29_464">
									<rect
										width="20"
										height="20"
										fill="white"
										transform="translate(0 0.5)"
									/>
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>

				<div className={styles.footer_information}>
					<div className={styles.footer_copywrite}>
						<p>CEIN. 2019 KINS All rights reserved.</p>
					</div>
					<div className={styles.footer_conditions}>
						<p>Company Profile</p>
						<p>Privacy policy</p>
						<p>Cancellation policy</p>
						<p>Terms of service</p>
						<p>Refund/Return Policy</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
