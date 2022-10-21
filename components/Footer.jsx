import Link from "next/link";
import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`container ${styles.content}`}>
				<nav className={styles.nav}>
					<Link href={"/"}>Home</Link>
					<Link href={"/about-us"}>About us</Link>
					<Link href={"/blog"}>Blog</Link>
					<Link href={"/shop"}>Blog</Link>
				</nav>

				<p className={styles.copyright}>All rights reserved. {new Date().getFullYear()}</p>
			</div>
		</footer>
	);
};

export default Footer;
