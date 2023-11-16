import Head from "next/head";
import scss from "./Home.module.scss";
import AppDrawer from "@/components/AppDrawer";
import { ThemeToggleButtonProps } from "../components/ThemeToggleButton/ThemeToggleButton";

const Home = (props: ThemeToggleButtonProps) => {
	const { ColorModeContext } = props;

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
				<AppDrawer ColorModeContext={ColorModeContext} />
			</main>
		</>
	);
};

export default Home;
