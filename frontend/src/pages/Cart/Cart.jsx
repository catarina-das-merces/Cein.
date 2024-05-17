import React, { useContext } from "react";
import styles from "../../pages/Cart/Cart.module.css";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
	const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
		useContext(CartContext);

	const handleRemoveFromCart = (itemId) => {
		removeFromCart(itemId);
	};

	const handleIncreaseQuantity = (itemId) => {
		increaseQuantity(itemId);
	};
	const handleDecreaseQuantity = (itemId) => {
		decreaseQuantity(itemId);
	};

	return (
		<div className={styles.shopping_cart}>
			<div className={styles.hero_section}>
				<h1>Cart</h1>
				<p>
					Purchase one more item of the sale products and receive <br /> free
					shipping! *Automatically applied on the next page
				</p>
			</div>

			<div className={styles.categories}>
				<h3 className={styles.description_cart}>CART</h3>
				<h3 className={styles.description_price}>PRICE</h3>
				<h3 className={styles.description_quantity}>QUANTITY</h3>
				<h3 className={styles.description_subtotal}>SUB-TOTAL</h3>
			</div>

			{cartItems &&
				cartItems.map((item) => (
					<div key={item._id} className={styles.products}>
						<div className={styles.product_info}>
							<img
								className={styles.img}
								src={`https://cein.onrender.com/${item.image}`}
								alt=""
							/>
							<div>
								<h6>{item.title}</h6>
								<p>{item.variation}</p>
							</div>
						</div>
						<div className={styles.product_price}>
							<p>${item.price}</p>
						</div>
						<div className={styles.product_quantity}>
							<div className={styles.cart_product_add_remove_flex}>
								<svg
									onClick={() => handleDecreaseQuantity(item._id)}
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="17"
									viewBox="0 0 16 17"
									fill="none"
								>
									<path
										d="M3.22925 8.5H12.5626"
										stroke="#121212"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<p>{item.quantity}</p>
								<svg
									onClick={() => handleIncreaseQuantity(item._id)}
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="17"
									viewBox="0 0 16 17"
									fill="none"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M8.375 3.83398C8.375 3.62688 8.20711 3.45898 8 3.45898C7.79289 3.45898 7.625 3.62688 7.625 3.83398V8.12567H3.33325C3.12615 8.12567 2.95825 8.29356 2.95825 8.50067C2.95825 8.70778 3.12615 8.87567 3.33325 8.87567H7.625V13.1673C7.625 13.3744 7.79289 13.5423 8 13.5423C8.20711 13.5423 8.375 13.3744 8.375 13.1673V8.87567H12.6666C12.8737 8.87567 13.0416 8.70778 13.0416 8.50067C13.0416 8.29356 12.8737 8.12567 12.6666 8.12567H8.375V3.83398Z"
										fill="#121212"
									/>
								</svg>
							</div>
						</div>
						<div className={styles.product_subtotal}>
							<p>${item.price * item.quantity}</p>
						</div>
						<div
							className={styles.delete_icon}
							onClick={() => handleRemoveFromCart(item._id)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<g clipPath="url(#clip0_3_129)">
									<path
										d="M20.25 5.25H3.75"
										stroke="#333333"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M9.75 9.75V15.75"
										stroke="#333333"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M14.25 9.75V15.75"
										stroke="#333333"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25"
										stroke="#333333"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V5.25"
										stroke="#333333"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</g>
								<defs>
									<clipPath id="clip0_3_129">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</div>
					</div>
				))}

			<div className={styles.payments}>
				<div className={styles.total_section}>
					<h5>Total</h5>
					<p>
						$
						{cartItems.reduce(
							(total, item) => total + item.price * item.quantity,
							0
						)}
					</p>
				</div>
				<p className={styles.shipping_info}>
					Shipping Fee will be calculated at the time of purchase
				</p>
				<input className={styles.checkout_btn} type="button" value="Checkout" />
			</div>
		</div>
	);
};

export default Cart;
