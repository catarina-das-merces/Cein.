import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [selectedUser, setSelectedUser] = useState(null);
	const [newUserDataCreate, setNewUserDataCreate] = useState({
		name: "",
		email: "",
		password: "",
		role: "USER",
	});
	const [newUserDataUpdate, setNewUserDataUpdate] = useState({
		name: "",
		email: "",
		role: "USER",
	});
	const [showCreateForm, setShowCreateForm] = useState(false);
	const [showUpdateForm, setShowUpdateForm] = useState(false);
	const [userAuthorization, setUserAuthorization] = useState(false);

	useEffect(() => {
		fetchUsers();
	}, []);

	async function fetchUsers() {
		try {
			const response = await fetch("https://cein.onrender.com/auth/users");
			if (!response.ok) {
				throw new Error("Failed to fetch users");
			}
			const usersData = await response.json();
			setUsers(usersData);
			console.log(usersData);
		} catch (error) {
			console.error("Error fetching users:", error);
		}
	}

	const AdminLogout = () => {
		localStorage.removeItem("adminAuthorization");
		localStorage.removeItem("adminAccessTokenAuthorization");
		window.location.href = "/";
	};

	const AdminLogin = async (email, password) => {
		try {
			const response = await fetch("https://cein.onrender.com/auth/admin", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${
						localStorage.getItem("token") || sessionStorage.getItem("token")
					}`,
				},
				body: JSON.stringify({
					email: email,
					password: password,
				}),
			});
			if (response.ok) {
				const responseData = await response.json();
				const userWithoutPassword = responseData.user;
				const accessToken = responseData.accessToken;
				localStorage.setItem(
					"adminAuthorization",
					JSON.stringify(userWithoutPassword)
				);
				localStorage.setItem("adminAccessTokenAuthorization", accessToken);
				console.log("Response data:", responseData);
				window.location.href = "/dashboard";
			} else {
				throw new Error("Admin Login failed. Please check your credentials.");
			}
		} catch (error) {
			throw new Error("Admin Login failed. Please check your credentials.");
		}
	};

	const handleAdminLogin = async (event) => {
		event.preventDefault();
		try {
			await loginAdmin(email, password);
		} catch (error) {
			setError(error.message);
		}
	};

	useEffect(() => {
		const storedUserAuthorization = localStorage.getItem("adminAuthorization");
		if (storedUserAuthorization) {
			setUserAuthorization(true);
		}
	}, []);

	// useEffect(() => {
	// 	const storedUser =
	// 		sessionStorage.getItem("user") || localStorage.getItem("user");
	// 	if (storedUser) {
	// 		setUserLogged(JSON.parse(storedUser));
	// 	}
	// }, []);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch("https://cein.onrender.com/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					password,
					role,
				}),
			});

			if (response.ok) {
				console.log("Signup successful");
				const userData = await response.json();
				const userWithoutPassword = userData.user;
				const accessToken = userData.accessToken;

				localStorage.setItem("user", JSON.stringify(userWithoutPassword));
				localStorage.setItem("token", accessToken);
				window.location.href = "/";
			} else {
				console.error("Signup failed");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	async function deleteUser(userId) {
		try {
			const response = await fetch(
				`https://cein.onrender.com/auth/users/${userId}`,
				{
					method: "DELETE",
				}
			);
			if (!response.ok) {
				throw new Error("Failed to delete user");
			}
			// Remove o usuário deletado da lista de usuários no estado
			setUsers(users.filter((user) => user._id !== userId));
		} catch (error) {
			console.error("Error deleting user:", error);
		}
	}

	const handleLogin = async (email, password) => {
		try {
			const response = await fetch("https://cein.onrender.com/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});

			if (response.ok) {
				console.log("Login successful");
				const userData = await response.json();
				const userWithoutPassword = userData.user;
				const accessToken = userData.accessToken;

				localStorage.setItem("user", JSON.stringify(userWithoutPassword));
				localStorage.setItem("token", accessToken);
				window.location.href = "/";
			} else {
				console.error("Login failed");
				// Aqui você pode exibir uma mensagem de erro para o usuário
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const registerNewUser = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch("https://cein.onrender.com/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newUserDataCreate),
			});
			if (!response.ok) {
				throw new Error("Failed to register user");
			}
			setNewUserDataCreate({
				name: "",
				email: "",
				password: "",
				role: "USER",
			});
			alert("User created successfully!");
			fetchProducts();
			setShowCreateForm(false);
		} catch (error) {
			console.error("Error registering new user:", error);
		}
	};

	const updateUser = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch(
				`https://cein.onrender.com/auth/users/${selectedUser._id}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: newUserDataUpdate.name,
						email: newUserDataUpdate.email,
						role: newUserDataUpdate.role,
					}),
				}
			);
			if (!response.ok) {
				throw new Error("Failed to update user");
			}
			setSelectedUser(null);
			setNewUserDataUpdate({
				name: "",
				email: "",
				role: "USER",
			});
			fetchUsers();
		} catch (error) {
			console.error("Error updating user:", error);
		}
	};

	const handleCreateButtonClick = () => {
		setShowCreateForm(true);
	};

	const handleCloseForm = () => {
		setShowUpdateForm(false);
		setShowCreateForm(false);
	};

	const handleSelectUser = (userId) => {
		const user = users.find((u) => u._id === userId);
		if (user) setSelectedUser(user);
		setNewUserDataUpdate({
			name: user.name,
			email: user.email,
			role: user.role,
		});
		setShowUpdateForm(true);
	};

	const handleInputChange = (event, type) => {
		const { id, value } = event.target;
		if (type === "create") {
			setNewUserDataCreate({ ...newUserDataCreate, [id]: value });
		} else if (type === "update") {
			setNewUserDataUpdate({ ...newUserDataUpdate, [id]: value });
		}
	};

	return (
		<AuthContext.Provider
			value={{
				users,
				deleteUser,
				name,
				setName,
				email,
				setEmail,
				password,
				setPassword,
				handleSubmit,
				handleLogin,
				registerNewUser,
				updateUser,
				handleCreateButtonClick,
				handleCloseForm,
				showCreateForm,
				showUpdateForm,
				newUserDataCreate,
				setNewUserDataCreate,
				newUserDataUpdate,
				setNewUserDataUpdate,
				selectedUser,
				handleSelectUser,
				handleInputChange,
				AdminLogout,
				AdminLogin,
				handleAdminLogin,
				userAuthorization,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
