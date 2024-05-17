import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<>
			<div className={styles.about_container}>
				<div className={styles.about_first}>
					<img className={styles.first_image} src="about-image.png" alt="" />
					<div className={styles.first_info}>
						<h5>Out Story</h5>
						<p>
							Our line features meticulous skin, hair, and body care
							formulations, crafted with both efficacy and sensory delight in
							focus.
							<br></br>
							<br></br>
							We are dedicated to creating top-quality skin, hair, and body care
							products. We extensively research plant-based and lab-made
							ingredients, selecting only those with proven safety and
							effectiveness. At our distinctive stores, knowledgeable
							consultants are eager to introduce you to the Aesop range and
							assist with your choices.
						</p>
						<Link to="/ProductPage" className={styles.white_btn}>
							<span>Our approach to products</span>
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
				<div className={styles.about_second}>
					<div className={styles.second_info}>
						<h4>
							Countless solutions have been discovered in nature. We simply need
							to observe and tap into its inherent brilliance.
						</h4>
						<Link to="/ProductPage" className={styles.white_btn}>
							<span>Discover Products</span>
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
					<img
						src="
					about_image2.png"
						alt=""
					/>
				</div>
				<div className={styles.about_third}>
					<img className={styles.third_image} src="about-image3.png" alt="" />
				</div>
				<div className={styles.about_fourth}>
					<h5>
						Our formulations are rooted in nature's most valuable raw materials,
						enhanced with modern technologies to ensure optimal results for your
						skin.
					</h5>
					<p>THE FUTURE OF NATURAL SKINCARE</p>
				</div>
				<div className={styles.about_fifth}>
					<div className={styles.about_content}>
						<img
							className={styles.fifth_image}
							src="about_content.png"
							alt=""
						/>
						<div className={styles.fifth_info}>
							<p>Our Credo</p>
							<h5>Quality & Efficacy</h5>
							<p>
								For those serious about skin health, trust someone dedicated
								since 1986. With over 35 years of crafting certified natural
								cosmetics, we leverage extensive experience. Our mission is to
								create products beneficial for both body and planet.
							</p>
							<Link to="/ProductPage" className={styles.white_btn}>
								<span>Our Best Sellers</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
								>
									<g clipPath="url(#clip0_7_3674)">
										<path
											d="M3.75 12.5H20.25"
											stroke="white"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M13.5 5.75L20.25 12.5L13.5 19.25"
											stroke="white"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</g>
									<defs>
										<clipPath id="clip0_7_3674">
											<rect
												width="24"
												height="24"
												fill="white"
												transform="translate(0 0.5)"
											/>
										</clipPath>
									</defs>
								</svg>
							</Link>
						</div>
					</div>
					<div className={styles.about_content}>
						<img
							className={styles.fifth_image}
							src="about-content2.png"
							alt=""
						/>
						<div className={styles.fifth_info}>
							<p>Modern Science, Your Skin's Perfection</p>
							<h5>High techt Natural Skin Care</h5>
							<p>
								We build our formulas on nature's most precious raw materials,
								refined with modern technologies to guarantee the best results
								for your skin.
							</p>
							<Link to="/ProductPage" className={styles.white_btn}>
								<span>Discover More</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
								>
									<g clipPath="url(#clip0_7_3674)">
										<path
											d="M3.75 12.5H20.25"
											stroke="white"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M13.5 5.75L20.25 12.5L13.5 19.25"
											stroke="white"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</g>
									<defs>
										<clipPath id="clip0_7_3674">
											<rect
												width="24"
												height="24"
												fill="white"
												transform="translate(0 0.5)"
											/>
										</clipPath>
									</defs>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
