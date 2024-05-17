import styles from "./ProductCard.module.css";
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const ProductCard = ({ product }) => {
	const { addToCart } = useContext(CartContext);

	const handleAddToCart = () => {
		addToCart(product);
	};

	return (
		<>
			<div className={styles.productcard}>
				<div className={styles.productcard_img}>
					<img src={`https://cein.onrender.com/${product.image}`} />
				</div>
				<div className={styles.productcard_details}>
					<h6>{product.title}</h6>
					<p>{product.description}</p>
				</div>
				<div className={styles.productcard_info}>
					<p>{product.variation}</p>
					<p>${product.price}</p>
				</div>
				<input
					type="button"
					value="Add To Cart"
					className={styles.addtocart_btn}
					onClick={handleAddToCart}
				/>
			</div>
		</>
	);
};

export default ProductCard;
