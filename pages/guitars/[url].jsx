import Image from "next/future/image";
import styles from "../../styles/guitarras.module.css";
import React, { useState } from "react";
import Layout from "../../components/Layout";

const Product = ({ data: guitar, addToCart }) => {
	const { id } = guitar[0];

	const { description, name, image, price, url } = guitar[0].attributes;

	const [cantity, setCantity] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();
		debugger;

		if (cantity < 1) {
			alert("Cantity not valid");
			return;
		}

		const selectedGuitar = {
			id,
			image,
			name,
			price,
			cantity,
		};

		addToCart(selectedGuitar);
	};

	return (
		<Layout>
			<div className={`container ${styles.guitarra}`}>
				<Image src={image.data.attributes.formats.medium.url} width={200} height={400} alt="" />

				<div className={styles.contenido}>
					<h3>{name}</h3>
					<p className={styles.descripcion}>{description}</p>
					<p className={styles.precio}>${price}</p>
					<form className={styles.formulario} onSubmit={handleSubmit}>
						<label>Cantity: </label>
						<select value={cantity} onChange={(e) => setCantity(Number(e.target.value))}>
							<option value="0">Select</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>

						<input type="submit" value="Add to cart" />
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default Product;

export async function getServerSideProps({ params: { url } }) {
	const resp = await fetch(`${process.env.API_URL}/api/guitars?filters[url]=${url}&populate=*`);

	const { data } = await resp.json();
	return {
		props: {
			data,
		},
	};
}
