import React, { useContext, useRef } from "react";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import Popup from "../../Components/PopUp/PromotionPopup";
import { ProductContext } from "../../Context/ProductContext";
import ProductCard from "../../Components/Cards/ProductCard";
import Slider from "../../Components/Slider/Slider";

const Homepage = () => {
	const { products } = useContext(ProductContext);

	const getRandomProducts = (maxCount) => {
		const shuffledProducts = products.sort(() => 0.5 - Math.random());
		return shuffledProducts.slice(
			0,
			Math.min(maxCount, shuffledProducts.length)
		);
	};

	return (
		<>
			<Popup />
			<div className={styles.hero_section}>
				<div className={styles.hero_img}>
					<img className={styles.desktop_img} src="Section01.png" alt="" />
					<img className={styles.media_img} src="Section01-small.png" alt="" />
				</div>
				<div className={styles.hero_title}>
					<h6>Treat Your Body Like Your Face</h6>
					<h1>Highly Effective Body Care</h1>
					<p>
						A combination of nature and advanced technology. Vegan, natural,
						skin-friendly and rich in effective biotechnological ingredients.
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
							<g clipPath="url(#clip0_54_3724)">
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
								<clipPath id="clip0_54_3724">
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
			<div className={styles.home_journal}>
				<div className={styles.journal_img}>
					<img className={styles.desktop_img} src="Section02.png" alt="" />
					<img className={styles.media_img} src="homepage02_small.png" alt="" />
				</div>
				<div className={styles.journal_description}>
					<h6>Skin Care</h6>
					<h2>Potent Solutions for Demanding Skin</h2>
					<p>
						Discover products tailored for mature skin and urban lifestyles,
						offering daily hydration and the added advantage of powerful
						vitamins and antioxidants.
					</p>
					<Link to="/blog" className={styles.black_btn}>
						<span>Read More</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
						>
							<g clipPath="url(#clip0_54_2743)">
								<path
									d="M3.75 12.5H20.25"
									stroke="#333333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M13.5 5.75L20.25 12.5L13.5 19.25"
									stroke="#333333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_54_2743">
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
			<div className={styles.sugestion_section}>
				<div className={styles.sugestion_titles}>
					<h6>Parsley Seed Skin Care</h6>
					<h4>Supreme Skin Fortification</h4>
					<p>
						Discover our potent antioxidant-rich Parsley Seed Skin Care, perfect
						for all skin types.
					</p>
				</div>
				<div className={styles.sugestion_cards}>
					{getRandomProducts(4).map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</div>
			<div className={styles.hero_section}>
				<div className={styles.hero_img}>
					<img className={styles.desktop_img} src="homepage04.png" alt="" />
					<img className={styles.media_img} src="homepage04_small.png" alt="" />
				</div>
				<div className={styles.hero_title}>
					<h6>Revitalize Your Body</h6>
					<h1>Effective Ingredients for Visible Results</h1>
					<p>
						Our body products are rich in highly effective ingredients, achieve
						visible results, firm the skin and leave it feeling soft and supple.
						Fine textures that are quickly absorbed, non-greasy and in no way
						inferior to facial care. It’s time to give our body the same
						attention as our face.
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
							<g clipPath="url(#clip0_54_3724)">
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
								<clipPath id="clip0_54_3724">
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
			<div className={styles.sugestion_section}>
				<div className={styles.sugestion_titles}>
					<h6>Pure Radiance</h6>
					<h4>Natural Face Care for Visible Transformation</h4>
					<p>
						Our natural face care is based on pure ingredients and
						biotechnological plant power, designed to transform your skin and
						provide visible results —naturally.
					</p>
				</div>
				<div className={styles.sugestion_cards}>
					{getRandomProducts(4).map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</div>
			<div className={styles.quote_section}>
				<h1>
					Countless answers lie within nature's genius, awaiting our exploration
					and engagement.
				</h1>
				<p>THE FUTURE OF NATURAL SKINCARE</p>
			</div>
			<div className={styles.social_section}>
				<h4>User Voice</h4>
				<div className={styles.instagram_post}>
					<img className={styles.desktop_img} src="instagram01.png" alt="" />
					<img
						className={styles.media_img}
						src="instagram01_small.png"
						alt=""
					/>
					<img className={styles.desktop_img} src="instagram02.png" alt="" />
					<img
						className={styles.media_img}
						src="instagram02_small.png"
						alt=""
					/>
					<img className={styles.desktop_img} src="instagram03.png" alt="" />
					<img
						className={styles.media_img}
						src="instagram03_small.png"
						alt=""
					/>
					<img className={styles.desktop_img} src="instagram04.png" alt="" />
					<img
						className={styles.media_img}
						src="instagram04_small.png"
						alt=""
					/>
					<img className={styles.desktop_img} src="instagram05.png" alt="" />
					<img
						className={styles.media_img}
						src="instagram05_small.png"
						alt=""
					/>
					<img className={styles.desktop_img} src="instagram06.png" alt="" />
					<img
						className={styles.media_img}
						src="instagram06_small.png"
						alt=""
					/>
					<img
						className={styles.media_img}
						src="instagram07_small.png"
						alt=""
					/>
					<img
						className={styles.media_img}
						src="instagram08_small.png"
						alt=""
					/>
					<img
						className={styles.media_img}
						src="instagram09_small.png"
						alt=""
					/>
				</div>
				<Link className={styles.black_btn}>
					<span>More</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="24"
						viewBox="0 0 25 24"
						fill="none"
					>
						<g clipPath="url(#clip0_54_563)">
							<path
								d="M4.25 12H20.75"
								stroke="#333333"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M14 5.25L20.75 12L14 18.75"
								stroke="#333333"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_54_563">
								<rect
									width="24"
									height="24"
									fill="white"
									transform="translate(0.5)"
								/>
							</clipPath>
						</defs>
					</svg>
				</Link>
			</div>
			<div className={styles.post_section}>
				<p>Insights into Health and Well-being</p>
				<h5>Our Journal</h5>
				<Slider />
			</div>
		</>
	);
};

export default Homepage;
