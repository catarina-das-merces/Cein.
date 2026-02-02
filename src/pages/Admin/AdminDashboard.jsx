import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import styles from "./AdminDashboard.module.css";
import ProductAdmin from "./ProductsAdmin/ProductAdmin";
import UserAdmin from "./UsersAdmin/UserAdmin";

function AdminDashboard() {
	const { AdminLogout, userAuthorization } = useContext(AuthContext);
	const isAdmin = userAuthorization;

	return (
		<div className={styles.dashboard_container}>
			{isAdmin ? (
				<>
					<div>
						<div className={styles.welcome_logoutbtn}>
							<h1 className={styles.dashboard_header}>
								Welcome to the ADMIN Dashboard
							</h1>
							<button
								className={styles.logout_button}
								onClick={() => AdminLogout()}
							>
								Logout
							</button>
						</div>
					</div>
					<UserAdmin />
					<ProductAdmin />
				</>
			) : (
				<div className={styles.not_authorized}>
					<p>You do not have permission to access this page</p>
				</div>
			)}
		</div>
	);
}

export default AdminDashboard;
