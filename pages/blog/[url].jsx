import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/blog.module.css";

const Post = ({ post }) => {
	const { content, title, image, url, publishedAt } = post[0].attributes;

	return (
		<Layout>
			<article className={`${styles.post} ${styles["mt-3"]}`}>
				<div className={styles.contenido}>
					<Image
						src={image.data.attributes.formats.medium.url}
						alt=""
						width={600}
						height={400}
					/>

					<h3>{title}</h3>
					<p className={styles.fecha}>{publishedAt}</p>
					<p className={styles.texto}>{content}</p>
				</div>
			</article>
		</Layout>
	);
};

export default Post;

export async function getServerSideProps({ params: { url } }) {
	const resp = await fetch(`${process.env.API_URL}/api/blogs?filters[url]=${url}&populate=*`);

	const { data: post } = await resp.json();
	return {
		props: {
			post,
		},
	};
}
