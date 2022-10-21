import { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const cartLS = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("cart")) ?? [] : [];
	const [cart, setCart] = useState(cartLS);
	const [isPageReady, setIsPageReady] = useState(false);

	useEffect(() => {
		setIsPageReady(true);
	}, []);

	const addToCart = (guitar) => {
		if (cart.some((guitarState) => guitarState.id === guitar.id)) {
			const updatedCart = cart.map((guitarState) => {
				if (guitarState.id === guitar.id) {
					guitarState.cantidad = guitar.cantidad;
				}
				return guitarState;
			});
			setCart([...updatedCart]);
			localStorage.setItem("cart", JSON.stringify(cart));
		} else {
			setCart([...cart, guitar]);
			localStorage.setItem("cart", JSON.stringify(cart));
		}
	};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const deleteProduct = (id) => {
		const updatedCart = cart.filter((product) => product.id != id);
		setCart(updatedCart);
		window.localStorage.setItem("cart", JSON.stringify(cart));
	};

	const updateCantity = (guitar) => {
		const updatedCart = cart.map((guitarState) => {
			if (guitarState.id === guitar.id) {
				guitarState.cantity = parseInt(guitar.cantity);
			}
			return guitarState;
		});
		setCart(updatedCart);
		window.localStorage.setItem("cart", JSON.stringify(cart));
	};

	return isPageReady ? (
		<Component
			{...pageProps}
			cart={cart}
			addToCart={addToCart}
			updateCantity={updateCantity}
			deleteProduct={deleteProduct}
		/>
	) : (
		[]
	);
}

export default MyApp;
