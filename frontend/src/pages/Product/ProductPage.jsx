import React, { useContext, useEffect, useState } from "react";
import styles from "./ProductPage.module.css";
import { Link } from "react-router-dom";
import ProductCard from "../../Components/Cards/ProductCard";
import { ProductContext } from "../../Context/ProductContext";
import Slider from "../../Components/Slider/Slider";

const Productpage = () => {
	const { products } = useContext(ProductContext);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const filteredProducts =
		selectedCategory === "All"
			? products
			: products.filter((product) => product.category === selectedCategory);
	return (
		<>
			<div className={styles.productpage_hero}>
				<div className={styles.productpage_img}>
					<img className={styles.desktop_img} src="Section001.png" alt="" />
					<img className={styles.media_img} src="Section001-small.png" alt="" />
				</div>
				<div className={styles.productpage_title}>
					<h1>Skin Care</h1>
					<p>
						The skin is constantly changing, influenced by the environment,
						lifestyle, and diet. Our range is crafted with this in
						consideration, addressing various preferences and needs to help you
						achieve optimal skin health.
					</p>
				</div>
			</div>
			<div className={styles.productpage_filter}>
				<span onClick={() => setSelectedCategory("All")}>Shop All</span>
				<span onClick={() => setSelectedCategory("Cleanse")}>Cleanse</span>
				<span onClick={() => setSelectedCategory("Tone")}>Tone</span>
				<span onClick={() => setSelectedCategory("Treat & Masque")}>
					Treat & Masque
				</span>
				<span onClick={() => setSelectedCategory("Hand")}>Hand</span>
				<span onClick={() => setSelectedCategory("Serum")}>Serum</span>
				<span onClick={() => setSelectedCategory("Kit's")}>Kit's</span>
			</div>
			<div className={styles.main_title}>
				<p>Revered Formulations</p>
				<h3>Essentials For Every Skincare</h3>
			</div>
			<div className={styles.card_section}>
				{filteredProducts.map((product) => (
					<div key={product._id}>
						<ProductCard product={product} />
					</div>
				))}
			</div>
			<div className={styles.post_section}>
				<Slider />
			</div>
		</>
	);
};

export default Productpage;
