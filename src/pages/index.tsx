import { FC } from "react";
import Head from "next/head";
import scss from "./Home.module.scss";
import AppDrawer from "@/components/AppDrawer";

const Home: FC = () => {
	return (
		<>
			<Head>
				<title>Autospec</title>
				<meta
					name="description"
					content="Vehicle Inspection Report System"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>

			<main className={scss.main}>
				<AppDrawer />
			</main>
		</>
	);
};

export default Home;
