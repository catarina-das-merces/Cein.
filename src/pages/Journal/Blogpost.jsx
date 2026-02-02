import React from "react";
import styles from "./Blogpost.module.css";
import { Link } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";

const Blogpost = () => {
	return (
		<>
			<div className={styles.blogpost_title}>
				<h1>
					Countless solutions have been discovered in nature. We simply need to
					observe and tap into its inherent brilliance.
				</h1>
				<h4>
					Countless solutions have been discovered in nature. We simply need to
					observe and tap into its inherent brilliance.
				</h4>
			</div>
			<div className={styles.blogpost_image}>
				<img className={styles.desktop_img} src="blogpost-image.png" alt="" />
				<img
					className={styles.media_img}
					src="blogpost-image-small.png"
					alt=""
				/>
			</div>
			<div className={styles.blogpost_title}>
				<h1>
					Countless solutions have been discovered in nature. We simply need to
					observe and tap into its inherent brilliance.
				</h1>
				<h4>
					Countless solutions have been discovered in nature. We simply need to
					observe and tap into its inherent brilliance.
				</h4>
			</div>
			<div className={styles.image_container}>
				<div className={styles.image1}>
					<img src="blogpost-image2.png" alt="" />
				</div>
				<div className={styles.image2}>
					<img src="blogpost-image3.png" alt="" />
				</div>
				<div className={styles.image3}>
					<img src="blogpost-image3.png" alt="" />
				</div>
			</div>
			<div className={styles.post_section}>
				<p>Insights into Health and Well-being</p>
				<h5>Our Journal</h5>
				<Slider />
			</div>
		</>
	);
};

export default Blogpost;
