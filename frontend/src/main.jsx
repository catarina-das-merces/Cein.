import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Productpage from "./pages/Product/ProductPage.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Signin from "./pages/Login/Singin.jsx";
import Signup from "./pages/Login/Signup.jsx";
import Blog from "./pages/Journal/Blog.jsx";
import Blogpost from "./pages/Journal/Blogpost.jsx";
import About from "./pages/About/About.jsx";
import ProductAdmin from "./pages/Admin/ProductsAdmin/ProductAdmin.jsx";
import UserAdmin from "./pages/Admin/UsersAdmin/UserAdmin.jsx";
import Root from "./Components/Layout/Root/Root.jsx";
import AdminLogin from "./pages/Admin/Login/AdminLogin.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { ProductProvider } from "./Context/ProductContext.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Root>
				<Homepage />
			</Root>
		),
	},
	{
		path: "/productpage",
		element: (
			<Root>
				<Productpage />
			</Root>
		),
	},
	{
		path: "/cart",
		element: (
			<Root>
				<Cart />
			</Root>
		),
	},
	{
		path: "/signin",
		element: (
			<Root>
				<Signin />
			</Root>
		),
	},
	{
		path: "/signup",
		element: (
			<Root>
				<Signup />
			</Root>
		),
	},
	{
		path: "/about",
		element: (
			<Root>
				<About />
			</Root>
		),
	},
	{
		path: "/blog",
		element: (
			<Root>
				<Blog />
			</Root>
		),
	},
	{
		path: "/blogpost",
		element: (
			<Root>
				<Blogpost />
			</Root>
		),
	},
	{
		path: "/adminlogin",
		element: (
			<Root>
				<AdminLogin />
			</Root>
		),
	},
	{
		path: "/dashboard",
		element: (
			<Root>
				<AdminDashboard />
			</Root>
		),
	},
	{
		path: "/productadmin",
		element: (
			<Root>
				<ProductAdmin />
			</Root>
		),
	},
	{
		path: "/useradmin",
		element: (
			<Root>
				<UserAdmin />
			</Root>
		),
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<AuthProvider>
			<ProductProvider>
				<CartProvider>
					<RouterProvider router={router} />
				</CartProvider>
			</ProductProvider>
		</AuthProvider>
	</>
);
