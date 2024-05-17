import React from "react";
import styles from "./Blog.module.css";
import { Link } from "react-router-dom";

const Blog = () => {
	return (
		<>
			<div className={styles.blog_listing}>
				<div className={styles.blog_hero_section}>
					<div className={styles.hero_img}>
						<img
							className={styles.desktop_img}
							src="blog-hero-img.png"
							alt=""
						/>
						<img
							className={styles.media_img}
							src="blog-hero-img-small.png"
							alt=""
						/>
					</div>
					<div className={styles.hero_info}>
						<h3>Skin Care</h3>
						<p>
							The skin is constantly changing, influenced by the environment,
							lifestyle, and diet. Our range is crafted with this in
							consideration, addressing various preferences and needs to help
							you achieve optimal skin health.
						</p>
					</div>
				</div>
				<div className={styles.post_section}>
					<p>Insights into Health and Well-being</p>
					<h5>Our Journal</h5>
					<div className={styles.post_list}>
						<div className={styles.post_list_card}>
							<img src="product1.png" alt="" />
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
					</div>
				</div>
			</div>
			<div className={styles.blog_content}>
				<img className={styles.desktop_img} src="blog_image.png" alt="" />
				<img className={styles.media_img} src="blog-image-small.png" alt="" />
				<div className={styles.blog_content_info}>
					<h6>KNOWLEDGE TREASURES</h6>
					<h5>Mastering The Art Of Well Aging</h5>
					<p>
						Our line features meticulous skin, hair, and body care formulations,
						crafted with both efficacy and sensory delight in focus.
						<br></br>
						<br></br>
						We are dedicated to creating top-quality skin, hair, and body care
						products. We extensively research plant-based and lab-made
						ingredients, selecting only those with proven safety and
						effectiveness. At our distinctive stores, knowledgeable consultants
						are eager to introduce you to the Aesop range and assist with your
						choices.
					</p>
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
			<div className={styles.post_section}>
				<div className={styles.post_list}>
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
			</div>
			<div className={styles.blog_content}>
				<img src="blog_image2.png" alt="" />
				<div className={styles.blog_content_info}>
					<h6>KNOWLEDGE TREASURES</h6>
					<h5>Mastering The Art Of Well Aging</h5>
					<p>
						Our line features meticulous skin, hair, and body care formulations,
						crafted with both efficacy and sensory delight in focus.
						<br></br>
						<br></br>
						We are dedicated to creating top-quality skin, hair, and body care
						products. We extensively research plant-based and lab-made
						ingredients, selecting only those with proven safety and
						effectiveness. At our distinctive stores, knowledgeable consultants
						are eager to introduce you to the Aesop range and assist with your
						choices.
					</p>
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
		</>
	);
};

export default Blog;
