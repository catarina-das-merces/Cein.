import React, { useState, useEffect } from "react";
import styles from "./PromotionPopup.module.css";

const PromotionPopup = ({ handleClose }) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsOpen(true);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	const handleClosePromotionPopup = () => {
		setIsOpen(false);
	};

	return (
		<>
			{isOpen && (
				<>
					<div
						className={styles.popupBackground}
						onClick={handleClosePromotionPopup}
					></div>
					<div className={styles.popup}>
						<span className={styles.close} onClick={handleClosePromotionPopup}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="36"
								height="36"
								viewBox="0 0 36 36"
								fill="none"
							>
								<g clipPath="url(#clip0_25_681)">
									<path
										d="M28.125 7.875L7.875 28.125"
										stroke="white"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M28.125 28.125L7.875 7.875"
										stroke="white"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</g>
								<defs>
									<clipPath id="clip0_25_681">
										<rect width="36" height="36" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</span>
						<div className={styles.popup_info}>
							<div className={styles.popup_left}>
								<h4 className={styles.popup_title}>
									A Gift Is Waiting For You{" "}
								</h4>
								<p className={styles.popup_info}>
									Sign up for our newsletter and get a free travel size worth
									$10 for your next order over $60
								</p>
								<input
									className={styles.popup_email}
									type="email"
									placeholder="Your Email"
								/>
								<input
									className={styles.popup_btn}
									type="button"
									value="Subscribe Newsletter"
								/>
								<p className={styles.popup_consents}>
									I have acknowledged the <u>Data Protection Notice</u> and I
									consent to the processing of my data for receiving the
									newsletter and relevant analysis.
								</p>
							</div>
							<div className={styles.popup_right}>
								<img
									className={styles.popup_img}
									src="promotion_popup.png"
									alt=""
								/>
								<img
									className={styles.popup_img_small}
									src="promotion_popup_small.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default PromotionPopup;
