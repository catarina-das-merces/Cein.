import React, { useRef } from "react";
import styles from "./Slider.module.css";
import { Link } from "react-router-dom";

const Slider = () => {
	const scrollRef = useRef(null);

	const handleScroll = (direction) => {
		if (scrollRef.current) {
			const scrollAmount = 300;
			scrollRef.current.scrollLeft +=
				direction === "left" ? -scrollAmount : scrollAmount;
		}
	};

	return (
		<>
			<div className={styles.scroll_arrows}>
				<img
					src="ArrowLeft.png"
					alt="Scroll Left"
					onClick={() => handleScroll("left")}
				/>
				<img
					src="ArrowRight.png"
					alt="Scroll Right"
					onClick={() => handleScroll("right")}
				/>
			</div>
			<div className={styles.post_list} ref={scrollRef}>
				<div className={styles.post_list_card}>
					<img src="/product1.png" alt="" />
					<div className={styles.post_list_info}>
						<h6>SKIN CONCIERGE</h6>
						<span>Mineral Sunscreens vs Chemical Sunscreens</span>
						<Link to="/Blogpost" className={styles.post_list_btn}>
							<span>Read More</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<g clipPath="url(#clip0_7_2563)">
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
									<clipPath id="clip0_7_2563">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</Link>
					</div>
				</div>
				<div className={styles.post_list_card}>
					<img src="product2.png" alt="" />
					<div className={styles.post_list_info}>
						<h6>SKIN CONCIERGE</h6>
						<span>The Right Skincare When Traveling</span>
						<Link to="/Blogpost" className={styles.post_list_btn}>
							<span>Read More</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<g clipPath="url(#clip0_7_2563)">
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
									<clipPath id="clip0_7_2563">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</Link>
					</div>
				</div>
				<div className={styles.post_list_card}>
					<img src="product3.png" alt="" />
					<div className={styles.post_list_info}>
						<h6>SKIN CONCIERGE</h6>
						<span>Top 10 Sunscreens in 2024</span>
						<Link to="/Blogpost" className={styles.post_list_btn}>
							<span>Read More</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<g clipPath="url(#clip0_7_2563)">
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
									<clipPath id="clip0_7_2563">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</Link>
					</div>
				</div>
				<div className={styles.post_list_card}>
					<img src="product4.png" alt="" />
					<div className={styles.post_list_info}>
						<h6>SKIN CONCIERGE</h6>
						<span>Mastering The Art Of Well Aging</span>
						<Link to="/Blogpost" className={styles.post_list_btn}>
							<span>Read More</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<g clipPath="url(#clip0_7_2563)">
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
									<clipPath id="clip0_7_2563">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</Link>
					</div>
				</div>
				<div className={styles.post_list_card}>
					<img src="product5.png" alt="" />
					<div className={styles.post_list_info}>
						<h6>SKIN CONCIERGE</h6>
						<span>Mineral Sunscreens vs Chemical Sunscreens</span>
						<Link to="/Blogpost" className={styles.post_list_btn}>
							<span>Read More</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<g clipPath="url(#clip0_7_2563)">
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
									<clipPath id="clip0_7_2563">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</Link>
					</div>
				</div>
				<div className={styles.post_list_card}>
					<img src="product6.png" alt="" />
					<div className={styles.post_list_info}>
						<h6>SKIN CONCIERGE</h6>
						<span>The Right Skincare When Traveling</span>
						<Link to="/Blogpost" className={styles.post_list_btn}>
							<span>Read More</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<g clipPath="url(#clip0_7_2563)">
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
									<clipPath id="clip0_7_2563">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</Link>
					</div>
				</div>
				<div className={styles.post_list_card}>
					<img src="product7.png" alt="" />
					<div className={styles.post_list_info}>
						<h6>SKIN CONCIERGE</h6>
						<span>Top 10 Sunscreens in 2024</span>
						<Link to="/Blogpost" className={styles.post_list_btn}>
							<span>Read More</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<g clipPath="url(#clip0_7_2563)">
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
									<clipPath id="clip0_7_2563">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</Link>
					</div>
				</div>
				<div className={styles.post_list_card}>
					<img src="product8.png" alt="" />
					<div className={styles.post_list_info}>
						<h6>SKIN CONCIERGE</h6>
						<span>Mastering The Art Of Well Aging</span>
						<Link to="/Blogpost" className={styles.post_list_btn}>
							<span>Read More</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<g clipPath="url(#clip0_7_2563)">
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
									<clipPath id="clip0_7_2563">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Slider;
