import Head from "next/head";
import Guitar from "../components/Guitar";
import Layout from "../components/Layout";
import Post from "../components/Post";
import styles from "../styles/grid.module.css";

export default function Home({ guitars, posts }) {
	return (
		<>
			<Layout title="Inicio">
				<main className="container">
					<h1 className="heading">Our collection</h1>

					<div className={styles.grid}>
						{guitars?.map((guitar) => (
							<Guitar guitar={guitar} key={guitar.id} />
						))}
					</div>
				</main>

				<section className="container">
					<h2 className="heading">Blog</h2>

					<div className={styles.grid}>
						{posts?.map((post) => (
							<Post key={post.id} post={post} />
						))}
					</div>
				</section>
			</Layout>
		</>
	);
}

export async function getServerSideProps() {
	const urlGuitars = `${process.env.API_URL}/api/guitars?populate=*`;
	const urlPosts = `${process.env.API_URL}/api/blogs?populate=*`;

	const [resGuitars, resPosts] = await Promise.all([fetch(urlGuitars), fetch(urlPosts)]);

	const [{ data: guitars }, { data: posts }] = await Promise.all([resGuitars.json(), resPosts.json()]);

	return {
		props: {
			guitars,
			posts,
		},
	};
}
