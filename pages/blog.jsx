import React from "react";
import Layout from "../components/Layout";
import Post from "../components/Post";
import styles from "../styles/grid.module.css";

const Blog = ({ posts }) => {
	return (
		<Layout>
			<main className="container">
				<h1 className="heading">Blog</h1>

				<div className={styles.grid}>
					{posts?.map((post) => (
						<Post key={post.id} post={post} />
					))}
				</div>
			</main>
		</Layout>
	);
};

export default Blog;

export async function getServerSideProps() {
	const resp = await fetch(`${process.env.API_URL}/api/blogs?populate=*`);
	const { data: posts } = await resp.json();

	return {
		props: {
			posts,
		},
	};
}
