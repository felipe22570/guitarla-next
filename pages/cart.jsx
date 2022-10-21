import React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Image from "next/future/image";
import styles from "../styles/cart.module.css";

const Cart = ({ cart, updateCantity, deleteProduct }) => {
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const totalPrice = cart.reduce((total, product) => total + product.cantity * product.price, 0);

		setTotal(totalPrice);
	}, [cart]);

	return (
		<Layout pagina={"Carrito de compras"}>
			<h1 className="heading">Cart</h1>
			<main className={`container ${styles.contenido}`}>
				<div className={styles.carrito}>
					<h2>Products</h2>
					{cart.length === 0
						? "Empty cart"
						: cart.map((c) => (
								<div key={c.id} className={styles.producto}>
									<div>
										<Image
											layout="responsive"
											width={250}
											height={500}
											src={c.image.data.attributes.formats.medium.url}
											alt=""
										/>
									</div>
									<div>
										<p className={styles.nombre}>{c.name}</p>
										<div className={styles.cantidad}>
											<p>Cantity: </p>
											<select
												value={c.cantity}
												className={styles.select}
												onChange={(e) =>
													updateCantity({
														cantity: e.target.value,
														id: c.id,
													})
												}
											>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
											</select>
										</div>
										<p className={styles.price}>
											{"$"}
											<span>{c.price}</span>
										</p>
										<p className={styles.subtotal}>
											{"Subtotal: $"}
											<span>{c.price * c.cantity}</span>
										</p>
									</div>

									<button
										type="button"
										className={styles.button}
										onClick={() => deleteProduct(c.id)}
									>
										X
									</button>
								</div>
						  ))}
				</div>
				<div className={styles.resumen}>
					{total > 0 ? (
						<>
							<h3>Summary of the order</h3>
							<p>Total to be paid: {total}</p>
						</>
					) : (
						<p>There is no products</p>
					)}
				</div>
			</main>
		</Layout>
	);
};

export default Cart;
