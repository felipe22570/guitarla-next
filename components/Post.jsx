import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/blog.module.css";

const Post = ({ post }) => {
	const { content, title, image, url, publishedAt } = post.attributes;

	return (
		<article>
			<div className={styles.contenido}>
				<Image src={image.data.attributes.formats.medium.url} alt="" width={600} height={400} />

				<h3>{title}</h3>
				<p className={styles.fecha}>{publishedAt}</p>
				<p className={styles.resumen}>{content}</p>

				<Link href={`/blog/${url}`}>
					<a className={styles.enlace}>Read post</a>
				</Link>
			</div>
		</article>
	);
};

export default Post;
