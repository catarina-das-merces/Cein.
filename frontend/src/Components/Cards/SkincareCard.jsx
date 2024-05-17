import React from "react";
import styles from "./SkincareCard.module.css";

const Skincarecard = () => {
	return (
		<>
			<div className={styles.skincare_card}>
				<div className={styles.card_title}>
					<p>Skin Routine</p>
					<h4>Gentle Care For Delicate Skin</h4>
				</div>

				<div className={styles.cards}>
					<div className={styles.card_info}>
						<img src="wash.png" alt="" />
						<p>Cleansing</p>
						<div className={styles.card_number}>
							<p>01</p>
						</div>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
					>
						<g clipPath="url(#clip0_44_5431)">
							<path
								d="M2.5 8H13.5"
								stroke="#333333"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8 2.5V13.5"
								stroke="#333333"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_44_5431">
								<rect width="16" height="16" fill="white" />
							</clipPath>
						</defs>
					</svg>
					<div className={styles.card_info}>
						<img src="HandSoap.png" alt="" />
						<p>Tone</p>
						<div className={styles.card_number}>
							<p>02</p>
						</div>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
					>
						<g clipPath="url(#clip0_44_5431)">
							<path
								d="M2.5 8H13.5"
								stroke="#333333"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8 2.5V13.5"
								stroke="#333333"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_44_5431">
								<rect width="16" height="16" fill="white" />
							</clipPath>
						</defs>
					</svg>
					<div className={styles.card_info}>
						<img src="cream.png" alt="" />
						<p>Cream</p>
						<div className={styles.card_number}>
							<p>03</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skincarecard;
