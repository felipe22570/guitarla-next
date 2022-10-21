import Image from "next/future/image";
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/about.module.css";

const About = () => {
	return (
		<Layout>
			<main className="container">
				<h2 className="heading">About us</h2>

				<div className={styles.content}>
					<Image src="/img/nosotros.jpg" width={700} height={900} alt="" />

					<div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ante
							urna. Aliquam et nunc eu justo consectetur aliquam eu ut ante. Duis
							tincidunt turpis nulla, vel viverra dolor dignissim vel. Pellentesque sit
							amet felis sit amet lectus lacinia rutrum non sit amet augue. Nunc in
							dapibus sem. Quisque dictum at leo non auctor. Vestibulum vulputate lorem
							vel vestibulum fringilla. Nam convallis est id velit imperdiet efficitur.
						</p>

						<p>
							Etiam mollis est tellus, et lacinia massa sodales a. Suspendisse pretium
							sollicitudin erat, ut lobortis turpis placerat id. Fusce suscipit mi erat,
							a blandit metus imperdiet quis. Proin mattis, justo sed pharetra consequat,
							elit libero lacinia purus, sed blandit tellus ante vitae elit. Nunc
							fringilla, metus a suscipit pretium, elit velit dictum justo, et
							condimentum ex nibh eget est. Maecenas sed convallis libero. Curabitur
							egestas rutrum justo, at cursus libero dignissim congue. orci est.
						</p>
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default About;
