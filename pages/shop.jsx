import React from "react";
import Layout from "../components/Layout";
import Guitar from "../components/Guitar";
import styles from "../styles/grid.module.css";

const Shop = ({ data: guitars }) => {
	console.log(guitars);

	return (
		<Layout>
			<main className="container">
				<h2 className="heading">Our collection</h2>

				<div className={styles.grid}>
					{guitars?.map((guitar) => (
						<Guitar guitar={guitar} key={guitar.id} />
					))}
				</div>
			</main>
		</Layout>
	);
};

export default Shop;

export async function getServerSideProps() {
	const resp = await fetch(`${process.env.API_URL}/api/guitars?populate=*`);
	const { data } = await resp.json();

	return {
		props: {
			data,
		},
	};
}
