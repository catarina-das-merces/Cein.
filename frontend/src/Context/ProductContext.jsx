import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [newProductDataCreate, setnewProductDataCreate] = useState({
		title: "",
		description: "",
		category: "",
		price: "",
		variation: "",
		image: null,
	});
	const [selectedProduct, setSelectedProduct] = useState("");
	const [updateFormData, setUpdateFormData] = useState({
		updateTitle: "",
		updateDescription: "",
		updateCategory: "",
		updatePrice: "",
		updateVariation: "",
		updateImage: null,
	});
	const handleDeleteProduct = async (productId) => {
		try {
			const response = await fetch(
				`https://cein.onrender.com/api/products/${productId}`,
				{
					method: "DELETE",
				}
			);
			if (response.ok) {
				alert("Product deleted successfully!");
				fetchProducts();
			} else {
				throw new Error("Failed to delete product");
			}
		} catch (error) {
			console.error("Error deleting product:", error);
		}
	};
	const [showCreateForm, setShowCreateForm] = useState(false);
	const [showUpdateForm, setShowUpdateForm] = useState(false);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		try {
			const response = await fetch("https://cein.onrender.com/api/products");
			if (!response.ok) {
				throw new Error("Failed to fetch products");
			}
			const productsData = await response.json();
			setProducts(productsData);
			console.log(productsData);
		} catch (error) {
			console.error("Error fetching products:", error);
		}
	};

	const handleCreateProduct = async (event) => {
		event.preventDefault();
		try {
			const formData = new FormData();
			formData.append("title", newProductDataCreate.title);
			formData.append("description", newProductDataCreate.description);
			formData.append("price", newProductDataCreate.price);
			formData.append("category", newProductDataCreate.category);
			formData.append("variation", newProductDataCreate.variation);
			formData.append("image", newProductDataCreate.image);

			const response = await fetch("https://cein.onrender.com/api/products", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				setnewProductDataCreate({
					Title: "",
					Description: "",
					Price: "",
					Category: "",
					Variation: "",
					Image: null,
				});
				alert("Product created successfully!");
				fetchProducts();
				setShowCreateForm(false);
			} else {
				throw new Error("Error creating product");
			}
		} catch (error) {
			alert("Error creating product!");
			console.error("Error:", error);
		}
	};

	const handleSelectProduct = (productId) => {
		const product = products.find((p) => p._id === productId);
		if (product) {
			setSelectedProduct(product);
			setUpdateFormData({
				updateTitle: product.title,
				updateDescription: product.description,
				updatePrice: product.price,
				updateCategory: product.category,
				updateVariation: product.variation,
				updateImage: null, // Certifique-se de limpar o campo de arquivo ao selecionar um novo produto
			});
			setShowUpdateForm(true);
		}
	};

	const handleUpdateFormDataChange = (event, fieldName) => {
		if (event.target.type === "file") {
			const file = event.target.files[0]; // Obtenha o arquivo do evento
			setUpdateFormData({
				...updateFormData,
				[fieldName]: file, // Armazene o arquivo no estado
			});
		} else {
			setUpdateFormData({
				...updateFormData,
				[fieldName]: event.target.value,
			});
		}
	};

	const handleUpdateProduct = async (event) => {
		event.preventDefault();
		try {
			const formData = new FormData();
			formData.append("title", updateFormData.updateTitle);
			formData.append("description", updateFormData.updateDescription);
			formData.append("price", updateFormData.updatePrice);
			formData.append("category", updateFormData.updateCategory);
			formData.append("variation", updateFormData.updateVariation);
			formData.append("image", updateFormData.updateImage);

			const response = await fetch(
				`https://cein.onrender.com/api/products/${selectedProduct._id}`,
				{
					method: "PUT",
					body: formData,
				}
			);
			if (response.ok) {
				alert("Product updated successfully!");
				setUpdateFormData({
					updateTitle: "",
					updateDescription: "",
					updatePrice: "",
					updateCategory: "",
					updateVariation: "",
					updateImage: null,
				});
				fetchProducts();
				setShowUpdateForm(false);
			} else {
				throw new Error("Error updating product");
			}
		} catch (error) {
			alert("Error updating product!");
			console.error("Error:", error);
		}
	};

	const handleCreateButtonClick = () => {
		setShowCreateForm(true);
	};

	const handleCloseForm = () => {
		setShowUpdateForm(false);
		setShowCreateForm(false);
	};

	return (
		<ProductContext.Provider
			value={{
				products,
				fetchProducts,
				setnewProductDataCreate,
				handleCreateProduct,
				handleSelectProduct,
				handleUpdateFormDataChange,
				handleUpdateProduct,
				handleDeleteProduct,
				handleCreateButtonClick,
				handleCloseForm,
				showCreateForm,
				showUpdateForm,
				updateFormData,
				newProductDataCreate,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};
