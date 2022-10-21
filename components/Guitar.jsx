import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/guitarras.module.css";

const Guitar = ({ guitar }) => {
	const { description, name, image, price, url } = guitar.attributes;

	return (
		<div className={styles.guitarra}>
			<Image src={image.data.attributes.formats.medium.url} width={200} height={400} alt="" />

			<div className={styles.contenido}>
				<h3>{name}</h3>
				<p className={styles.descripcion}>{description}</p>
				<p className={styles.precio}>${price}</p>
				<Link href={`/guitars/${url}`}>
					<a className={styles.enlace}>See product</a>
				</Link>
			</div>
		</div>
	);
};

export default Guitar;
