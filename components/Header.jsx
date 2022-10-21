import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/header.module.css";

const Header = () => {
	const router = useRouter();

	return (
		<header className={styles.header}>
			<div className={`container ${styles.bar}`}>
				<Link href={"/"}>
					<a>
						<Image src="/img/logo.svg" width={300} height={40} alt="logo image" />
					</a>
				</Link>
				<nav className={styles.nav}>
					<Link href={"/"}>
						<a className={router.pathname === "/" ? styles.active : ""}>Home</a>
					</Link>
					<Link href={"/about-us"}>
						<a className={router.pathname === "/about-us" ? styles.active : ""}>About</a>
					</Link>
					<Link href={"/blog"}>
						<a className={router.pathname === "/blog" ? styles.active : ""}>Blog</a>
					</Link>
					<Link href={"/shop"}>
						<a className={router.pathname === "/shop" ? styles.active : ""}>Shop</a>
					</Link>
					<Link href={"/cart"}>
						<a>
							<Image src={"/img/carrito.png"} width={25} height={20} alt="" />
						</a>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
